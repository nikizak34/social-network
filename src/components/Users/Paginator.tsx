import React, {ChangeEvent} from 'react';
import {Pagination} from "@material-ui/lab";


type PaginatorType = {
    pageSize: number
    currentPage: number
    totalUsersCount: number
    onClickHandler: (pageNumber: number) => void
    portionSize: number

}

export const Paginator: React.FC<PaginatorType> = ({
                                                       pageSize,
                                                       totalUsersCount,
                                                       onClickHandler,
                                                       portionSize
                                                   }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    const handleOnPageChange = (event: ChangeEvent<unknown>, page: number) => {
        onClickHandler(page)
    }


    return (

        <Pagination count={portionCount}
                    showFirstButton showLastButton
                    variant="outlined"
                    color="primary"
                    onChange={handleOnPageChange}
        />

    );
};

