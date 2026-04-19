import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../components/modal/Modal'
import './topbar.css'

const TopBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasUnread, setHasUnread] = useState(true)

  const handleOpenModal = () => {
    setIsModalOpen(true)
    setHasUnread(false) // stop animation after first click
  }

  return (
    <>
      <div id="TopBar-mainCONT">
        <Link to="/">
          <span className="material-symbols-outlined">
            home
          </span>
        </Link>

        <span 
          className={`material-symbols-outlined notif-icon ${hasUnread ? 'active' : ''}`}
          onClick={handleOpenModal}
        >
          notification_important
        </span>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>
          This portfolio is currently a work in progress. Ongoing updates include improvements to content, user interface, and overall user experience. Please revisit this page for future updates.
        </p>
      </Modal>
    </>
  )
}

export default TopBar