import React from 'react';

const FormElements = () => {
    return(
        <div>
            <form>
                <label>
                    Nama : <input type='text' placeholder='masukan nama'></input>
                </label>
                <br/>
                <label>
                    Jurusan :
                    <select>
                        <option>Teknik Informatika</option>
                        <option>Teknik Industri</option>
                        <option>Teknik Mesin</option>
                        <option>Teknik Elektro</option>
                    </select>
                </label>
                <br/>
                <label>
                    Alamat : <textarea rows={4} cols={20}></textarea>
                </label>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormElements