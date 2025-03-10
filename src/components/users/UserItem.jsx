import { Link } from "react-router-dom";

//전달된 유저객체 안의 아바타이미지주소, 로그인아이디를 표시
function UserItem({ user: { avatar_url, login } }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/${login}`}
          >
            프로파일 보기
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {};

export default UserItem;
