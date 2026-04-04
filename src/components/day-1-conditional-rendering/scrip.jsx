export function Greeting ({isLoggedIn}){
    if (isLoggedIn) {
         return <h1>{
            isLoggedIn ? "Wellcomeback!" : "pleasse signin"
            }</h1>
    }
    return <h1>Please Signin</h1>
}

export function UserCheck({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in</h1>;
}
