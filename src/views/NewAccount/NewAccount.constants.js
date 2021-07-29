if (!email || email.length < 1) return ('noEmail')
        if (!password || password.length < 1 ) return ('noPassword')
        if (!confirmPassword || confirmPassword.length < 1) return 
        ('noConfirmPassword')

        if (!validator.isEmail(email)) return setAlert
        ('formatEmail')
        if (password.length < 8) return setAlert('shortPassword')
        if (confirmPassword.length <8) return setAlert
        ('shortConfirmPassword')

        if (password !== confirmPassword) return setAlert
        ('mismaPasswords')
        setCreating(true)

const ALERT = {
    noEmail: {
        title: 'Missing email',
        description : 'Email address is required in order to  create account',
    },
    noPassword: {
       title: 'Missing password',
       description : 'Password is required in order to  create account',
    },
    noConfirmPassword: {
       title: 'Missing password confirmation',
       description : 'Confirm password is required in order to  prevent typos',
    },
    formatEmail: {
       title: 'Invalid email',
       description : 'Email value does not match standards email formatting.Correct any typos or mistakes.',
    },
    shortPassword: {
       title: 'Password to short',
       description : 'For security purposes passwords can not be shorted than 8 characters',
    },
    mismatchPasswords: {
        title: 'Confirm password does not match',
        description : 'Match sure that both the password value and confirm password value are the same',
    },
    mismatchPasswords: {
        title: 'Confirm password does not match',
        description : 'Can not create an account for an email that is already registered. If this is you then use sign in instead.',
        nature: '',
    },
    creating: {
        title: 'Creating account',
        nature : 'resolving',
    }
}