import React from "react";
import {createStore} from "../create-store";
import {rootReducer} from "../redux/rootReducer";
import {INCREMENT,DECREMENT} from "../constants";




export default class FourBtn  extends React.Component{

    render() {
        const counter = document.getElementById('counter');
        const store = createStore(rootReducer,0);
        store.dispatch({type:'INIT'});
        store.subscribe(()=>{

            const state =store.getState();
            counter.textContent = state;
        });

        return (

        <div className="container pt-5">
            <h1 className="heading">
                <span>Redux</span>
                <button onClick={()=>{document.body.classList.toggle('dark')}} className="btn btn-info" id="theme">Сменить тему</button>
            </h1>
            <hr/>
            <div className="card container">
                <div className="card-body">
                    <h5 className="card-title">Счетчик: <span id="counter"></span></h5>
                    <div className='row '>
                        <button onClick={()=>{store.dispatch({type:INCREMENT})}} className="btn btn-primary mr-1" id="add">Добавить</button>
                        <button onClick={()=>{store.dispatch({type:DECREMENT})}} className="btn btn-danger mr-1" id="sub">Убрать</button>
                        <button onClick={()=>{}} className="btn btn-success " id="async">Async</button></div>
                </div>
            </div>
        </div>
        )

    }

}
