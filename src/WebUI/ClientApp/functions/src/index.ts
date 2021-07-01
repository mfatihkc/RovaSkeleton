import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.addRole = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email)
    .then(user =>{
        if(data.role === 'admin'){
            return admin.auth().setCustomUserClaims(user.uid, {
                admin: true
            })
        }
        else if(data.role === 'gold'){
            return admin.auth().setCustomUserClaims(user.uid, {
                gold: true
            })
        }
        else if(data.role === 'platinum'){
            return admin.auth().setCustomUserClaims(user.uid, {
                platinum: true
            })
        }
        else {
            return admin.auth().setCustomUserClaims(user.uid, {
                free: true
            })
        }
        
    })
    .then(() => {
        return {
            message: `Succsess! ${data.email} has been made an ${data.role}`
        }
    })
    .catch(err => {
        return err;
    })
});


