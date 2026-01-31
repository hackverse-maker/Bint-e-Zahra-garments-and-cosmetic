// Admin Authentication & Logic

function checkAdminAuth() {
    const token = localStorage.getItem('adminToken');
    if (!token && !window.location.pathname.includes('admin-login.html')) {
        window.location.href = 'admin-login.html';
    }
}

function adminLogout() {
    localStorage.removeItem('adminToken');
    window.location.href = 'admin-login.html';
}

// Initial check
if (typeof checkAdminAuth === 'function') {
    checkAdminAuth();
}
