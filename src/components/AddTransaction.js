import React,{useState} from 'react'

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  return (
    <div>
      <h3>Add new Transaction</h3>
      <form>
            <div className="form-control">
                <label htmlFor="text">Expense</label>
                <input type="text"value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text....'/>
            </div>
            {/* <div className='form-control'>
              <label htmlFor='select'>type of expense</label>
                  <select>
                    <option value="Electricity">Electricity</option>
                    <option value="water">Water</option>
                    <option value="Food">Food</option>
                    <option value="personal">Personal</option>
                    <option value="others" >others</option>
                  </select>
            </div> */}
        <div classname="form-control">
            <label htmlFor="amount"> Amount <br />
            (negative - expense, positive - income)
            </label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...'/>
        </div>
            <button className='btn'>Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
