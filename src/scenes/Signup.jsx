export default function Signup({setUser}) {
  return (
 <section style={{ background: "##ffff0030"}}>
    <h1>Signup</h1>
    <button onClick={() => setUser('returning User')}></button>
 </section>
  )
}