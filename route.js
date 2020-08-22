
const express = require('express')
var kbpgp = require('./assets/kbpgp');
const api = express.Router()
const cors = require('cors')
api.use(cors())


api.post('/convert', (req, res) => {
   
var public_key =
      `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: Keybase OpenPGP v2.0.76
Comment: https://keybase.io/crypto

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
z56ViQkBuqCtWKPyhpp4R1WcwLwZO5rHrD6nHuM=
=cG50
-----END PGP PUBLIC KEY BLOCK-----`;

   kbpgp.KeyManager.import_from_armored_pgp({
        armored: public_key
      }, function(err, recipient) {
        if (err) {
          res.send(err);
        } else {
          console.log("encrypting...");
            kbpgp.box({
                msg: req.body.text /* <= aqui parametro POST */ ,                 
                encrypt_for: recipient
            }, function(err, result_string, result_buffer) {
            if (err) {
                console.log("Encrytion failed!");
            } else {
                var data = {
                    codigo: result_string
                }
                res.json(data)
            }
          });
        }
    }); 
})

module.exports = api
