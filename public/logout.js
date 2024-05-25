const Logout = () => {
    const handleLogout = () => {
      firebase.auth().signOut()
        .then(() => {
          console.log('Logout successful');
          // You can redirect to the login page or perform any other action after logout
        })
        .catch((error) => {
          console.error('Logout failed:', error);
        });
    };
  
    return (
      <button type="button" className="btn btn-light" onClick={handleLogout}>
        Logout
      </button>
    );
  };
  
  //export default Logout;