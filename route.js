
const express = require('express')
var kbpgp = require('./assets/kbpgp');
const api = express.Router()
const cors = require('cors')
api.use(cors())


api.post('/convert', (req, res) => {
   
var public_key =
      `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: fnContact PGP / Keybase OpenPGP v1.0.0
Comment: https://fncontact.com

xm0EWw+8gAEDALZ6mjQfEFCbjLKcXyJavKX0HulUn5qfqNlxhSEG4eI/iVGBzsHh
CcoJdcNDTfv0QFUN2Ht01hvgYyJ2VoLEN4XLXAuRGrhoE0vM7ex56oKD7MFwzJM5
NcQiD09Bd7BPYwARAQABzQpmb29AYmFyLmlvwo0EEwEKABcFAlsPvIACGy8DCwkH
AxUKCAIeAQIXgAAKCRCLUmZBZ8igR9k5AwCRVT23AEzosZDey+ddAp5U/msacOPm
SozaMfrsTP7b2S7zeg8gwBxoTA6DH1aF02o1TC+OzA9j6bXDgl1qxPeNSjUG151f
eg7uO71HLTtHnDZuRmHi6uP/Nkggb0RaUknOPQRbD7yAAQGAzHfjfIdyYk9WInNo
dB2h/hCZczXpkoNI3CbfJyhdrzABlU+RF8ni4PQg9+XaU41HABEBAAHCwBMEGAEK
AA8FAlsPvIAFCQ8JnAACGy4AWAkQi1JmQWfIoEdNIAQZAQoABgUCWw+8gAAKCRBz
J3ovG1DfdJTXAX9a6CjauRqoCjw5G2llqzc477Db1xFm0Uj77mnd01b+MV44ZAY2
f+SljNGOzT3zBxqkHgL/aH7cxz14VXqjPC6MuEKBWFmi7VzIfZVcmIXj9FxcCSpv
A/rlgI0ev1gnT6Xnc5ouyMXuiPhB28SBenAuzezVM0qVeYnVbI3Bqyg5bCmsEam0
4HeRavIbBt1uokExYGSbzj0EWw+8gAEBgNbSoiS+vF4YFgx5kukxoFjyU62fscaP
pnmKU9Z04F/PPL3oXIqbzfqmnPLRL10P2wARAQABwsATBBgBCgAPBQJbD7yABQkP
CZwAAhsuAFgJEItSZkFnyKBHTSAEGQEKAAYFAlsPvIAACgkQbd+taxJLb/0CvgF7
BOQvsiU8OGOYrm8zgRN4jdL2OuzJwdJ61Su/uxz5SZnsXppW3dYqDa/lxySNNx3v
4bwDAKyLCAsRtK9pCKhMdqm7jkBfzPOS5AUsTxz9RvSU+pdE88i6TG01hLBPxwV+
g2XxGGMz0YdYGP6ZKSaoBSPTJqNXkOtmmQ/6Fj/GRgClIq8jEofWRjxmvBUbkxBi
6ACJ2Q==
=d5WW
-----END PGP PUBLIC KEY BLOCK-----
`;

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
