function Header() {
  return (
    <header className="topbar">
      <div className="brand" aria-label="Northview University">
        <div className="brand-mark" aria-hidden="true">
          NU
        </div>
        <span>Northview University</span>
      </div>
      <nav className="top-actions" aria-label="User controls">
        <button type="button" className="ghost-btn">
          Bell Notifications
        </button>
        <button type="button" className="profile-btn">
          <span className="avatar" aria-hidden="true">
            LM
          </span>
          <span>Laura Martinez</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
