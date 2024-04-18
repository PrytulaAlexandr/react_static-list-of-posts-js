import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  return (
    <p>
      {`Posted by `}

      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    </p>
  );
};
