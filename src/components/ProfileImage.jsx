import profile from "../assets/portfolio.jpg";
export default function ProfileImage(){
    return(
        <>
          <img src={profile} alt="profile" className="rounded-lg" />
        </>
    )
}