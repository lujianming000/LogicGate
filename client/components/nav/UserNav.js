import Link from "next/link";
//User sidebar
const UserNav = () => {
  return (
    <div className="nav flex-column nav-pills mt-2">
      <Link href="/user">
        <a className="nav-link active">Dashboard</a>
      </Link>
    </div>
  );
};

export default UserNav;
