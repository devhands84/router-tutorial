import { useParams } from "react-router-dom";

const data = {
    velopert: {
        name: "whee",
        desc: "development",
    },
    tester: {
        name: "test",
        desc: "QM",
    },
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1> User Profile</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p> {profile.desc}</p>
                </div>
            ) : (
                <p> none</p>
            )}
            ;
        </div>
    );
};

export default Profile;
