const twoExamLogic = ({ age, course, exam, firstname, lastname, registration, test }) => {
    //Fozzy logic calculations done 
    if (exam <= 60 && test <= 40) {
        const average = parseInt(exam) + parseInt(test)
        if (average <= 40) {
            const formObj = {
                firstname: firstname,
                lastname: lastname,
                age: age,
                course: course,
                registration: registration,
                result: "F",
                average: average
            }
            return formObj
        } else if (average <= 45) {
            const formObj = {
                firstname: firstname,
                lastname: lastname,
                age: age,
                course: course,
                registration: registration,
                result: "E",
                average: average
            }
            return formObj
        } else if (average <= 50) {
            const formObj = {
                firstname: firstname,
                lastname: lastname,
                age: age,
                course: course,
                registration: registration,
                result: "D",
                average: average
            }
            return formObj
        } else if (average <= 60) {
            const formObj = {
                firstname: firstname,
                lastname: lastname,
                age: age,
                course: course,
                registration: registration,
                result: "C",
                average: average
            }
            return formObj
        } else if (average <= 70) {
            const formObj = {
                firstname: firstname,
                lastname: lastname,
                age: age,
                course: course,
                registration: registration,
                result: "B",
                average: average
            }
            return formObj
        } else if (average <= 100) {
            const formObj = {
                firstname: firstname,
                lastname: lastname,
                age: age,
                course: course,
                registration: registration,
                result: "A",
                average: average
            }
            return formObj
        } else {
            const formObj = {
                firstname: firstname,
                lastname: lastname,
                age: age,
                course: course,
                registration: registration,
                result: "default",
                average: average
            }
            return formObj
        }
    } else {
        const formObj = {
            firstname: firstname,
            lastname: lastname,
            age: age,
            course: course,
            registration: registration,
            result: "Error, Wrong Input!",
            average: false

        }
        return formObj
    }


}

export default twoExamLogic


