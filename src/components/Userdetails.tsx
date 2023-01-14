import './styles.scss'
//icons
import user from '../../src/icons/icon.svg'
import user1 from '../../src/icons/icon1.svg'
import user2 from '../../src/icons/icon2.svg'
import user3 from '../../src/icons/icon3.svg'

export default function Userdetails() {
  return (
    <div className='userDetails'>
        <h2>Users</h2>
        <div className='users'>
            <div className='card'>
                <img src={user1} alt='users'/>
                <h4>Users</h4>
                <h3>2,453</h3>
            </div>
            <div className='card'>
                <img src={user2} alt='users'/>
                <h4>Active Users</h4>
                <h3>2,453</h3>
            </div>
            <div className='card'>
                <img src={user3} alt='users'/>
                <h4>Users with Loans</h4>
                <h3>12,453</h3>
            </div>
            <div className='card'>
                <img src={user} alt='users'/>
                <h4>Users with Savings</h4>
                <h3>102,453</h3>
            </div>
        </div>
    </div>
  )
}
