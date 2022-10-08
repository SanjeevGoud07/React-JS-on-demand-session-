import './index.css'

const TabItem = props => {
  const {tabDetails, updateTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeClassName = isActive ? 'active-tab-btn' : ''

  const clickTab = () => {
    updateTab(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={clickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
