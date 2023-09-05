import React from 'react'
import Header from '../Front Page/Front'

const Survey = () => {
  return (

    <div>
        <Header/>
            <div class="">
        <h1 className='text-center mb-6 text-lg'>Mental Health Assessment Survey</h1>
        <form action="survey_process.php" method="post">
            <p className='text-lg'>1. On a scale of 1 to 5, how often do you feel overwhelmed by your schoolwork or responsibilities? (1 = rarely, 5 = frequently)</p>
            <label for="q1">
                <select id="q1" className='w-full text-center' name="q1">
                    <option value="1">1 - Rarely</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 - Frequently</option>
                </select>
            </label>

            <p>2. Have you experienced persistent feelings of sadness or hopelessness in the past month? (Yes/No)</p>
            <label className='items-center mr-4'>
                <input type="radio" name="q2" value="Yes"/> Yes
            </label>
            <label>
                <input type="radio" name="q2" value="No"/> No
            </label>

            <p>3. How often do you have trouble sleeping at night due to worries or stress?</p>
            <label for="q3">
                <select id="q3" name="q3">
                    <option value="Rarely">Rarely</option>
                    <option value="Sometimes">Sometimes</option>
                    <option value="Often">Often</option>
                    <option value="Always">Always</option>
                </select>
            </label>

            <p>4. Do you feel comfortable talking to someone about your emotional or mental health concerns?</p>
            <label>
                <input type="radio" name="q2" value="Yes"/> Yes
            </label>
            <label>
                <input type="radio" name="q2" value="No"/> No
            </label>
            
            <p>5. Have you noticed changes in your appetite or weight recently due to stress or emotional reasons?</p>
            <label>
                <input type="radio" name="q2" value="Yes"/> Yes
            </label>
            <label>
                <input type="radio" name="q2" value="No"/> No
            </label>

            <p>6. How often do you engage in physical activity or relaxation techniques to manage stress?</p>
            <label for="q3">
                <select id="q3" name="q3">
                    <option value="Rarely">Rarely</option>
                    <option value="Sometimes">Sometimes</option>
                    <option value="Often">Often</option>
                    <option value="Always">Always</option>
                </select>
            </label>

            <p>7. Are you experiencing increased irritability or anger in your daily life?</p>
            <label>
                <input type="radio" name="q2" value="Yes"/> Yes
            </label>
            <label>
                <input type="radio" name="q2" value="No"/> No
            </label>

            <p>8. Have you ever had thoughts of self-harm or suicide?</p>
            <label>
                <input type="radio" name="q2" value="Yes"/> Yes
            </label>
            <label>
                <input type="radio" name="q2" value="No"/> No
            </label>

            <p>9. How often do you feel a sense of loneliness or isolation?</p>
            <label for="q3">
                <select id="q3" name="q3">
                    <option value="Rarely">Rarely</option>
                    <option value="Sometimes">Sometimes</option>
                    <option value="Often">Often</option>
                    <option value="Always">Always</option>
                </select>
            </label>

            <p>10. Are there any specific stressors or challenges you're currently facing that you would like to share?</p>
            <label for="q10">
                <textarea id="q10" name="q10" rows="4"></textarea>
            </label>

            <button type="submit">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Survey