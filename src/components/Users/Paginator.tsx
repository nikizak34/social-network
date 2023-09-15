import React, {useState} from 'react';
import s from "./Paginator.module.css";



type PaginatorType={
    pageSize: number
    currentPage: number
    totalUsersCount: number
    onClickHandler: (pageNumber: number) => void
    portionSize:number

}

export const Paginator:React.FC<PaginatorType> = ({pageSize,currentPage,totalUsersCount,onClickHandler,portionSize}) => {
    let pagesCount = Math.ceil(totalUsersCount /pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount=Math.ceil(pagesCount/portionSize)
    let [portionNumber,setPortionNumber]=useState(1)
    let leftPortionPageNumber=(portionNumber-1)*portionSize+1
    let rightPortionPageNumber=portionNumber*portionSize

    return (
            <div className={s.paginator}>
                {portionNumber>1&&
                    <button onClick={()=>{setPortionNumber(portionNumber-1)}} >PREF</button>}
                {pages.filter(p=>p>=leftPortionPageNumber&&p<=rightPortionPageNumber)
                    .map((p, index) => {
                    return <span key={index} onClick={() => {
                       onClickHandler(p)
                    }} className={currentPage === p ? s.selectedPage : ''}>{p}</span>
                })}
                {portionCount>portionNumber&& <button onClick={()=>{setPortionNumber(portionNumber+1)}}>PEF</button>}
            </div>

    );
};

