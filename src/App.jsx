import React from 'react';
import Home from './Componenta/Home';
import { store } from './Features/NotesStore';
import { Provider } from 'react-redux';
import NotesPage from './Componenta/NotesPage';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive, faListCheck, faNoteSticky, faTrashCan, faUser, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { Link, Route, Routes } from 'react-router-dom';
import TasksPage from './TasksPage';
import HomePage from './HomePage';



function App(props) {
    return (

        <div className=' mainbox contaiiner-fluid'>
            <div className='row'>

                <div className="col-3 sidebox  ">

                    <nav className='sidebarm  p-2  mlg' >
                        <div className='my-5 li  con'>
                            <span className="mx-2 text-center  fs-1    brand-name ">
                                
                                <FontAwesomeIcon icon={faUserLarge} />
                                
                                Kural</span>


                        </div>

                        <hr className="text dark " />


                        <div className="lsit-group list-group-flush lg ">
                            <div className="list1 ">  <Link to="/" className=" fs-4  list-group-item  py2">


                                <AiFillHome />          <span className='` d-none mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-inline' >{"Home"}</span></Link>

                                <a href="" className="mt-5 fs-4   list-group-item  py2">
                                    <AiOutlineSearch />
                                    <span className='d-none fs-4  mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-inline' >{"Search"}</span></a>


                                <Link to="/NotesPage" className=" mt-5 fs-4 list-group-item  py2">

                                    <FontAwesomeIcon icon={faNoteSticky} />
                                    <span className='d-none fs-4  mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-i nline' >{"Notes"}</span></Link>


                                <Link to="/TasksPage" className=" mt-5 fs-4 list-group-item  py2">

                                    <FontAwesomeIcon icon={faListCheck} />
                                    <span className='d-none fs-4  mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-inline' >{`Tasks`}</span></Link>

                                <a href="" className=" mt-5 fs-4 list-group-item  py2">

                                    <FontAwesomeIcon icon={faBoxArchive} />
                                    <span className='d-none fs-4  mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-inline' >{"Archive"}</span></a>

                                <a href="" className="mt-5 fs-4 list-group-item  py2">

                                    <FontAwesomeIcon icon={faTrashCan} />
                                    <span className='d-none fs-4  mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-inline' >{"Bin"}</span></a>

                            </div>








                        </div>
                    </nav>



                </div>





                <div className='container-fluid notesmainbox  col-9 '>


                    <Provider store={store}>

                        <Routes>

                            <Route path='/NotesPage' element={<NotesPage />} />
                            <Route path='/TasksPage' element={<TasksPage /> } />
                            <Route path='/' element={<HomePage /> } />

                        </Routes>

                    </Provider>


                </div>
            </div>




        </div>
    );
}

export default App;