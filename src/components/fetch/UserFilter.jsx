function UserFilter({ userIdFilter, onFilterChange, totalPosts, filteredCount }) {
  return (
    <div className="user-filter">
      <div className="filter-container">
        <label htmlFor="userIdInput" className="filter-label">
          사용자 ID로 필터링:
        </label>
        <input
          id="userIdInput"
          type="number"
          value={userIdFilter}
          onChange={(e) => onFilterChange(e.target.value)}
          placeholder="사용자 ID 입력 (1-10)"
          min="1"
          max="10"
          className="filter-input"
        />
        <button 
          onClick={() => onFilterChange('')}
          className="clear-button"
          disabled={!userIdFilter}
        >
          전체보기
        </button>
      </div>
      
      {userIdFilter && (
        <div className="filter-result">
          사용자 {userIdFilter}의 포스트: {filteredCount}개 (전체 {totalPosts}개 중)
        </div>
      )}
    </div>
  )
}

export default UserFilter 