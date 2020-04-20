export const QUESTIONS = [
    {
        "page": "temperature",
        "questions": [
            {
                "question": "What is your temperature today?", 
                "answers": ["Submit","I did not take my temperature today"]
            },
            {
                "question": "How do you feel today?", 
                "answers": ["Fine", "Not Well", "Submit", "Back"]
            }
        ]
    },
    {
        "page": "symptoms", 
        "questions": [
            {
                "question": "** If you are experiencing any of the following emergency symptoms associated with COVID-19, please get medical attention immediately **", 
                "answers": ["* Trouble Breathing", "* Persistent chest pain or pressure", "* New confusion or inability to arouse (“wake up”)", "* Blue-ish lips or face", "Fever", "Cough", "Shortness of breath", "Headache", "Fatigue", "Diarrhea", "Nausea", "Loss of taste/smell", "Submit", "Back"]
            }
        ]
    }, 
    {
        "page": "medical",
        "questions": [
            {
                "question": "Have you contacted a medical provider about your symptoms today?", 
                "answers": ["Yes, by phone.", "Yes, in person.", "No", "Submit", "Back"]
            },
            {
                "question": "Have you had a positive COVID-19 test result since your last report?", 
                "answers": ["Yes", "No", "I had a test but I have not gotten in the results yet.", "Submit", "Back"]
            }, 
            {
                "question": "Is anyone in your household sick today?", 
                "answers": ["Yes", "No", "Submit", "Back"]
            }

        ]
    }, 
    {
        "page": "tracking", 
        "questions": [
            {
                "question": "What is your zipcode?", 
                "answers": ["Back", "Continue"]
            }, 
            {
                "question": "What is your phone number?", 
                "answers": ["Submit"]
            }
        ]
    }
    
]