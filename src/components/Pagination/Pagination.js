import React, { useState, useEffect } from 'react'
import './pagination.css'
import { useDispatch} from 'react-redux';
import ReactPaginate from 'react-paginate';
import { fetchGetPagination } from '../../actions/charactersActions';
const Pagination = () => {
	const [pagination, setPagination] = useState(null)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchGetPagination(pagination))
		window.scrollTo({ left: 0, top: 0 })
	}, [pagination])

	return (
		<div className="prinicipal">
				<div className="pagination">
				<ReactPaginate
					className="pagination"
					pageCount={42}
					nextClassName="pagination__next"
					previousClassName="pagination__prev"
					pageClassName="pagination__page"
					pageLinkClassName="pagination__links"
					onPageChange={(data) => setPagination(data?.selected + 1)}
					activeClassName="pagination__active"
				/>
			</div>
		</div>
	)
}

export default Pagination
