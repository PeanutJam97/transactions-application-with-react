import { Button } from "react-bootstrap";


function Profile() {
  return (
    <div className="d-grid gap-2">
      <Button href="/ChangePassword" className="mt-5" variant="danger" size="lg">
        Change Email
      </Button>
      <Button href="/ChangeUsername" variant="outline-danger" size="lg">
        Change Password
      </Button>
    </div>
  );
}

export default Profile;