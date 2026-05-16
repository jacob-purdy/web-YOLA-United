
    (function() {
      if (document.getElementById('lt-br-fp-lib')) {
        return;
      }

      var script = document.createElement('script');
      script.src = 'https://assets.production.linktr.ee/client-brfp/br-fp-script.js';
      script.async = true;
      script.id = 'lt-br-fp-lib';

      script.onload = function() {
        if (typeof window.__lt_br_fp !== 'undefined' && typeof window.__lt_br_fp.generate === 'function') {
          window.__lt_br_fp.generate({
            networkProfile: {
              asNumber: '20001',
              country: 'US',
              city: 'van nuys',
              region: 'CA',
              acceptEncoding: 'gzip, deflate, br, zstd',
              acceptLanguage: 'en-US,en;q=0.9',
              ja4: 't13d1516h2_8daaf6152771_d8a2da3f94cd'
            }
          })
        }
      };

      document.head.appendChild(script);
    })();
  