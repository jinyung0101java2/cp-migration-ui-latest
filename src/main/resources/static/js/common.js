
const func= {
	/*vaultUrl: URI_CP_VAULT_API,
	vaultPrivateKey: VAULT_PRIVATE_KEY,
	vaultPublicKey: VAULT_PUBLIC_KEY,
	vaultHmacKey: VAULT_HMAC_KEY,
	migrationUrl: URI_CP_MIGRATION_API,
	migPrivateKey: MIG_PRIVATE_KEY,
	migPublicKey: MIG_PUBLIC_KEY,
	migHmacKey: MIG_HMAC_KEY,*/
	vaultUrl: URI_CP_VAULT_API,
	vaultPrivateKey: "-----BEGIN PRIVATE KEY-----\n" +
		"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\n" +
		"2aAkUNJN0T/6DVBHy5LKTHMyy6UdUsA=\n" +
		"-----END PRIVATE KEY-----",
	vaultPublicKey: "-----BEGIN PUBLIC KEY-----\n" +
		"MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAsCM1yMBWGUvM8YFsvXf1\n" +
		"lkqLiVjwSKQWB6Q2sObQFOm/079kr2QzKbI6zs7ereM+Ze7wIlfbmlMjzKIlgMtk\n" +
		"x+VPwCsfr6dT17EQzIh+gikeu6iphTmwc2d6bFXN5TJFBi7OrdB+cPDGPfzVQk1f\n" +
		"8RQSgK2MHVTSrL7JJGn/DF9g6+N76YF9MCM6yMiDD5Ekzi9RBDGm1glEay4kiqlI\n" +
		"hh9QpF+1M1gy2HKSLflyb2ogbx0GLNbvIFEHjdYz9uu1QGlZvvw6p5IUpRbCs8sN\n" +
		"rign5QvlMqtqoiaL52KMU7BTTX6cHB/63iA0YpWi9NrHHohYr0tIQeXvm9m87RbF\n" +
		"Ka1wOphT7dkaFxS59MIEvsbwVKEtbyitf3pXucDr7pZN+sWto6dhkdNF8bqCCA37\n" +
		"87lcMmD/REXinpUk/KIluChPVbArbG0kGkyCCLas1az4CIg3pkgFdnWmDG5dwpUp\n" +
		"83gpqsvIXYhWBr/A9nALHFGr+QKZIulLTtT3dHlVsSD+lbZJciBBfnJBGCC/AbC8\n" +
		"GaKScdjPqxTWFY5Dl8jCdQr+XdemI21Piovi3e38Ku3mNi8IionI7urM12yDZ6C4\n" +
		"U+ukmNxOSd4yYQzcQWghxBm1VWy7JJm6veZdoihiF5TgRDRWF7aR+Ky+5dOENyv1\n" +
		"1MfW5qTIIRXbx+NoKpt4TK0CAwEAAQ==\n" +
		"-----END PUBLIC KEY-----",
	vaultHmacKey: VAULT_HMAC_KEY,
	migrationUrl: URI_CP_MIGRATION_API,
	migPrivateKey: "-----BEGIN PRIVATE KEY-----\n" +
		"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\n" +
		"CKaLFqB3zxJlTGzaN8w0kZQ4Z3Qz2HY=\n" +
		"-----END PRIVATE KEY-----",
	migPublicKey: "-----BEGIN PUBLIC KEY-----\n" +
		"MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA3dqVOwiep6c96bHWUw8e\n" +
		"tePyAtxnwHwpNhXA8d5LHcv5tfE94xCrlIWMRqEyi2eMEty7RJ8hYSOk0vcmV3TC\n" +
		"H97On7MYYb6Kt2eMftLjpoEZAULzorr7UOV4rZPKy7DJzy45Mm24RbEpKqDcAqiN\n" +
		"tYwq98BxblxXl5WGONsbx/nH20tG14xu7TOXqKGwWHm2nhxtGCNPlsU03Dd5DiWb\n" +
		"hLjkZFAL9IDHNMApvDOjWt/JrmHw3UTxUPU0pEZPQcDFmGmQ67x7Q6fJvbQgYJuB\n" +
		"+EpRsmQMuyNt5U2hlf8ZLqa8597xmWylsXxQuhVy+XdZkdw7IPHK5bW1+6bZ7W4/\n" +
		"YTglKVcdPAsNUoX2FVtrxCtOa7pSG7fLJUOT9Ko8fNc0/7Qe313KT11UdrdRkQL5\n" +
		"2I4WLVNXuWUAn9O5mq44GpRrAIVy4LmYflq3WoenzfQx2s/LvUTq/zLlQkixqS0o\n" +
		"88CBqXTdyer1lqyq25HfZ4mmzv6fa8ZExEr73Xdjg3lpBA+KBUkYFllzJRWC4FnB\n" +
		"VvcvanGzF8eIOtLaGFqOtjgSrraVVSuOSGIm/PxBs/g7sd5gTeBc6rs5g7hYWJl2\n" +
		"sfx/g1mNMu+NtCAMj4NtTZnrBvRFbABdkD53EKvFW5TaWvUSPXiuVt6DPCuSk8/v\n" +
		"phYe16CbS6MOFCk3OdhxxFUCAwEAAQ==\n" +
		"-----END PUBLIC KEY-----",
	migHmacKey: MIG_HMAC_KEY,

	setMigLocaleLang(reqUrl){
		var request = new XMLHttpRequest();
		request.open('PUT', reqUrl, false);
		request.setRequestHeader('Content-type', 'application/json');
		request.onreadystatechange = () => {
			if (request.readyState === XMLHttpRequest.DONE){
				if(request.status === 200){
					reloadPage();
				}
			};
		};
		request.send();
	},

	loadMigData(method, url, header, callbackFunction, list) {

		if(url == null) {
			callbackFunction();
			return false;
		}

		var httpRequest = new XMLHttpRequest();

		setTimeout(function() {
			httpRequest.open(method, url, false);
			httpRequest.setRequestHeader('Content-type', header);
			httpRequest.setRequestHeader('Authorization', sessionStorage.getItem('accessToken'));
			httpRequest.setRequestHeader('uLang', CURRENT_LOCALE_LANGUAGE);
			httpRequest.setRequestHeader('Accept-Language', CURRENT_LOCALE_LANGUAGE);

			httpRequest.onreadystatechange = () => {
				if (httpRequest.readyState === XMLHttpRequest.DONE) {
					if (httpRequest.status === 200) {
						callbackFunction((httpRequest.responseText), list);
					} else if (httpRequest.status === 500) {
						if (httpRequest.responseText === 'secret is nil') {
							console.warn = console.error = () => {};
						}
					} else {
						if (httpRequest.responseText === 'secret is nil') {
							sessionStorage.setItem('accountsData', 'N')
						}
					}
				}
			}
			httpRequest.send();
		}, 0)
	},

	saveMigData(method, url, data, bull, header, callFunc){
		func.loading();
		var httpRequest = new XMLHttpRequest();

		httpRequest.open(method, url, bull);
		httpRequest.setRequestHeader('Content-type', header);
		httpRequest.setRequestHeader('Authorization', sessionStorage.getItem('accessToken'));

		httpRequest.setRequestHeader('uLang', CURRENT_LOCALE_LANGUAGE);
		httpRequest.setRequestHeader('Accept-Language', CURRENT_LOCALE_LANGUAGE);

		httpRequest.onreadystatechange = () => {
			if (httpRequest.readyState === XMLHttpRequest.DONE){
				if (httpRequest.status === 200) {
					return func.alertMigPopup('SUCCESS', MSG_CHECK_TO_SUCCESS, true, MSG_CONFIRM, callFunc);
				} else {
					if(document.getElementById('loading')){
						document.getElementById('wrap').removeChild(document.getElementById('loading'));
					};
					if (httpRequest.responseText === 'data already exists') {
						return func.alertMigPopup('ERROR', MSG_ALREADY_EXIST, true, MSG_CONFIRM, 'closed');
					}
					return func.alertMigPopup('ERROR', MSG_CHECK_TO_FAIL, true, MSG_CONFIRM, 'closed');
				}
			}
		}
		httpRequest.send(data)
	},

	bucketMigData(method, url, data, bull, header, callbackFunction, list){
		if(url == null) {
			callbackFunction();
			return false;
		}

		var httpRequest = new XMLHttpRequest();

		httpRequest.open(method, url, bull);
		httpRequest.setRequestHeader('Content-type', header);
		httpRequest.setRequestHeader('Authorization', sessionStorage.getItem('accessToken'));

		httpRequest.setRequestHeader('uLang', CURRENT_LOCALE_LANGUAGE);
		httpRequest.setRequestHeader('Accept-Language', CURRENT_LOCALE_LANGUAGE);

		httpRequest.onreadystatechange = () => {
			if (httpRequest.readyState === XMLHttpRequest.DONE){
				if (httpRequest.status === 200) {
					callbackFunction(httpRequest.responseText, list);
				} else {
					if(document.getElementById('loading')){
						document.getElementById('wrap').removeChild(document.getElementById('loading'));
					};
					if (httpRequest.responseText === 'an unknown error occurred') {
						return func.alertMigPopup('ERROR', MSG_NO_BUCKET, true, MSG_CONFIRM, 'closed');
					}
					return func.alertMigPopup('ERROR', MSG_NO_BUCKET, true, MSG_CONFIRM, 'closed');
				}
			}
		}
		httpRequest.send(data)
	},

	deleteMigData(method, url, data, bull, header){
		func.loading();
		var httpRequest = new XMLHttpRequest();

		httpRequest.open(method, url, bull);
		httpRequest.setRequestHeader('Content-type', header);
		httpRequest.setRequestHeader('Authorization', sessionStorage.getItem('accessToken'));

		httpRequest.setRequestHeader('uLang', CURRENT_LOCALE_LANGUAGE);
		httpRequest.setRequestHeader('Accept-Language', CURRENT_LOCALE_LANGUAGE);

		httpRequest.onreadystatechange = () => {
			if (httpRequest.readyState === XMLHttpRequest.DONE){
				if (httpRequest.status === 200) {
					return func.alertMigPopup('SUCCESS', MSG_CHECK_TO_SUCCESS, true, MSG_CONFIRM, func.migHistoryBackRefresh);
				} else {
					if(document.getElementById('loading')){
						document.getElementById('wrap').removeChild(document.getElementById('loading'));
					};
					return func.alertMigPopup('ERROR', MSG_CHECK_TO_FAIL, true, MSG_CONFIRM, 'closed');
				}
			}
		}
		httpRequest.send(data)
	},

	alertMigPopup(title, text, bull, name, callback){
		var html = `<div class='modal-wrap' id='alertModal'><div class='modal'><h5>${title}</h5><p>${text}</p>`;
		if(bull) {
			html += `<a class='confirm' href='javascript:;'>${name}</a>`;
		};
		html += `<a class='close' href='javascript:;'>` + MSG_CLOSE + `</a></div></div>`;

		if(document.getElementById('alertModal') !== null) {
			document.getElementById('wrap').removeChild(document.getElementById('alertModal'));
		}

		func.migAppendHtml(document.getElementById('wrap'), html, 'div');

		document.getElementById('alertModal').querySelector('.close').addEventListener('click', (e) => {
			document.getElementById('wrap').removeChild(document.getElementById('alertModal'));
		}, false);

		if(callback) {
			document.getElementById('alertModal').querySelector('.confirm').addEventListener('click', (e) => {
				if(callback !== 'closed'){
					callback();
				};

				if(!IS_VCHK) {
					document.getElementById('wrap').removeChild(document.getElementById('alertModal'));
				}
			}, false);
		};
	},

	migHistoryBackRefresh(){
		location.href = document.referrer;

	},

	refresh(){
		location.href = location.href;
	},

	none() {
		return false;
	},
	loading(){
		var html = `<div id="loading">
						<div class="cubeSet">
							<div class="cube1 cube"></div>
							<div class="cube2 cube"></div>
							<div class="cube4 cube"></div>
							<div class="cube3 cube"></div>
						</div>
					</div>`

		func.migAppendHtml(document.getElementById('wrap'), html, 'div');
	},

	migAppendHtml(target, html, type){
		var div = document.createElement(type);
		div.innerHTML = html;
		while (div.children.length > 0){
			target.appendChild(div.children[0]);
		};
	},

	migRemoveHtml(target){
		while(target.hasChildNodes()){
			target.removeChild(target.firstChild);
		};
	},

	createUnixTimestamp() {
		return Math.floor(new Date().getTime());
	},

	encodeHmacSha256(data, type) {

		if (type === "vault") {
			return CryptoJS.HmacSHA256(data, func.vaultHmacKey).toString(CryptoJS.enc.Hex);
		} else {
			return CryptoJS.HmacSHA256(data, func.migHmacKey).toString(CryptoJS.enc.Hex);
		}

	},

	generateAesIv() {

		let hex  = "0123456789abcdef"; // 16 bytes
		let aesKeyBytes = "0123456789abcdef0123456789abcdef"; // 32 bytes
		let ivKey='';
		let aesKey='';

		for (i = 0; i < 32; i++) {
			ivKey += hex.charAt(Math.floor(Math.random() * 16));
		}

		let iv = CryptoJS.enc.Hex.parse(ivKey);

		for (i = 0; i < 64; i++) {
			aesKey += aesKeyBytes.charAt(Math.floor(Math.random() * 32));
		}

		let aes = CryptoJS.enc.Hex.parse(aesKey);

		return {
			"aes": aes,
			"iv": iv
		}

	},

	encodeDataWithAes(data, aes, iv) {
		return CryptoJS.AES.encrypt(data, aes,
			{ iv: iv
			}).toString();
	},

	encodeIvBase64(iv) {
		return CryptoJS.enc.Base64.stringify(iv)
	},

	decodeIvBase64(iv) {
		let parseWordArray = CryptoJS.enc.Base64.parse(iv);
		let decoded = parseWordArray.toString()
		return decoded;
	},

	async encodeRsaMigrationWebCryptoAPI(data) {
		const pemHF = {
			public: {
				header: '-----BEGIN PUBLIC KEY-----',
				footer: '-----END PUBLIC KEY-----',
			},
			private: {
				header: '-----BEGIN PRIVATE KEY-----',
				footer: '-----END PRIVATE KEY-----',
			},
		};

		const binaryDerString = window.atob(func.migPublicKey.replace(pemHF.public.footer, '').replace(pemHF.public.header, ''));
		const buffer = new Uint8Array(binaryDerString.length);
		for (let i = 0; i < binaryDerString.length; i++) {
			buffer[i] = binaryDerString.charCodeAt(i);
		}
		const publicKey = await window.crypto.subtle.importKey(
			'spki',
			buffer.buffer,
			{
				name: 'RSA-OAEP',
				hash: 'SHA-256',
			},
			true,
			['encrypt']
		);
		const data1 = new TextEncoder().encode(data);

		const cipher = await window.crypto.subtle.encrypt(
			{
				name: 'RSA-OAEP',
			},
			publicKey,
			data1
		);

		return btoa(String.fromCharCode(...new Uint8Array(cipher)));
	},

	async encodeRsaWebCryptoAPI(data, type) {
		const pemHF = {
			public: {
				header: '-----BEGIN PUBLIC KEY-----',
				footer: '-----END PUBLIC KEY-----',
			},
			private: {
				header: '-----BEGIN PRIVATE KEY-----',
				footer: '-----END PRIVATE KEY-----',
			},
		};

		if (type === "vault") {
			const binaryDerString = window.atob(func.vaultPublicKey.replace(pemHF.public.footer, '').replace(pemHF.public.header, ''));
			const buffer = new Uint8Array(binaryDerString.length);
			for (let i = 0; i < binaryDerString.length; i++) {
				buffer[i] = binaryDerString.charCodeAt(i);
			}
			const publicKey = await window.crypto.subtle.importKey(
				'spki',
				buffer.buffer,
				{
					name: 'RSA-OAEP',
					hash: 'SHA-256',
				},
				true,
				['encrypt']
			);
			let data1 = func.hexToUint8Array(data)

			const cipher = await window.crypto.subtle.encrypt(
				{
					name: 'RSA-OAEP',
				},
				publicKey,
				data1
			);

			return btoa(String.fromCharCode(...new Uint8Array(cipher)));
		} else {
			const binaryDerString = window.atob(func.migPublicKey.replace(pemHF.public.footer, '').replace(pemHF.public.header, ''));
			const buffer = new Uint8Array(binaryDerString.length);
			for (let i = 0; i < binaryDerString.length; i++) {
				buffer[i] = binaryDerString.charCodeAt(i);
			}
			const publicKey = await window.crypto.subtle.importKey(
				'spki',
				buffer.buffer,
				{
					name: 'RSA-OAEP',
					hash: 'SHA-256',
				},
				true,
				['encrypt']
			);
			let data1 = func.hexToUint8Array(data)

			const cipher = await window.crypto.subtle.encrypt(
				{
					name: 'RSA-OAEP',
				},
				publicKey,
				data1
			);

			return btoa(String.fromCharCode(...new Uint8Array(cipher)));
		}

	},

	async decodeRsaWebCryptoAPI(data, type) {
		const pemHF = {
			public: {
				header: '-----BEGIN PUBLIC KEY-----',
				footer: '-----END PUBLIC KEY-----',
			},
			private: {
				header: '-----BEGIN PRIVATE KEY-----',
				footer: '-----END PRIVATE KEY-----',
			},
		};

		if (type === 'vault') {
			const binaryDerString = window.atob(func.vaultPrivateKey.replace(pemHF.private.footer, '').replace(pemHF.private.header, ''));
			const buffer = new Uint8Array(binaryDerString.length);
			for (let i = 0; i < binaryDerString.length; i++) {
				buffer[i] = binaryDerString.charCodeAt(i);
			}

			const privateKey = await window.crypto.subtle.importKey(
				'pkcs8',
				buffer.buffer,
				{
					name: 'RSA-OAEP',
					hash: 'SHA-256',
				},
				true,
				['decrypt']
			);

			const binaryDerString2 = window.atob(data);
			const buffer2 = new Uint8Array(binaryDerString2.length);
			for (let i = 0; i < binaryDerString2.length; i++) {
				buffer2[i] = binaryDerString2.charCodeAt(i);
			}

			const text = await window.crypto.subtle.decrypt(
				{
					name: 'RSA-OAEP',
				},
				privateKey,
				buffer2.buffer
			);

			return new TextDecoder().decode(text);

		} else {
			const binaryDerString = window.atob(func.migPrivateKey.replace(pemHF.private.footer, '').replace(pemHF.private.header, ''));
			const buffer = new Uint8Array(binaryDerString.length);
			for (let i = 0; i < binaryDerString.length; i++) {
				buffer[i] = binaryDerString.charCodeAt(i);
			}

			const privateKey = await window.crypto.subtle.importKey(
				'pkcs8',
				buffer.buffer,
				{
					name: 'RSA-OAEP',
					hash: 'SHA-256',
				},
				true,
				['decrypt']
			);

			const binaryDerString2 = window.atob(data);
			const buffer2 = new Uint8Array(binaryDerString2.length);
			for (let i = 0; i < binaryDerString2.length; i++) {
				buffer2[i] = binaryDerString2.charCodeAt(i);
			}

			const text = await window.crypto.subtle.decrypt(
				{
					name: 'RSA-OAEP',
				},
				privateKey,
				buffer2.buffer
			);

			return new TextDecoder().decode(text);
		}
	},

	async responseDecodeData(data, type) {
		if (type === 'vault') {
			if (data !== 'undefined') {
				try {
					let jsonParseData = JSON.parse(data)
					let responseKey = jsonParseData.key;
					let responseIv = jsonParseData.iv;
					let responseData = jsonParseData.data;

					let responseDecodeAesKey = await func.responseDecodeAesKeyWithRsa(responseKey, func.vaultPrivateKey)
					let responseBase64DecodeAesKey = func.decodeIvBase64(responseDecodeAesKey)
					let responseBase64DecodeIv = func.decodeIvBase64(responseIv)

					return {
						"data": responseData,
						"aes": responseBase64DecodeAesKey,
						"iv": responseBase64DecodeIv
					}
				} catch (e) {
				}
			}

		} else if (type === 'mig') {
			if (data !== 'undefined') {
				try {
					let jsonParseData = JSON.parse(data)

					let responseKey = jsonParseData.key;
					let responseIv = jsonParseData.iv;
					let responseData = jsonParseData.data;

					let responseDecodeAesKey = await func.responseDecodeAesKeyWithRsa(responseKey, func.migPrivateKey)
					let responseBase64DecodeAesKey = func.decodeIvBase64(responseDecodeAesKey)
					let responseBase64DecodeIv = func.decodeIvBase64(responseIv)

					return {
						"data": responseData,
						"aes": responseBase64DecodeAesKey,
						"iv": responseBase64DecodeIv
					}
				} catch (e) {
				}

			}

		}
	},

	async responseDecodeAesKeyWithRsa(data, key) {
		const pemHF = {
			public: {
				header: '-----BEGIN PUBLIC KEY-----',
				footer: '-----END PUBLIC KEY-----',
			},
			private: {
				header: '-----BEGIN PRIVATE KEY-----',
				footer: '-----END PRIVATE KEY-----',
			},
		};

		const binaryDerString = window.atob(key.replace(pemHF.private.footer, '').replace(pemHF.private.header, ''));
		const buffer = new Uint8Array(binaryDerString.length);
		for (let i = 0; i < binaryDerString.length; i++) {
			buffer[i] = binaryDerString.charCodeAt(i);
		}

		const privateKey = await window.crypto.subtle.importKey(
			'pkcs8',
			buffer.buffer,
			{
				name: 'RSA-OAEP',
				hash: 'SHA-256',
			},
			true,
			['decrypt']
		);

		const binaryDerString2 = window.atob(data);
		const buffer2 = new Uint8Array(binaryDerString2.length);
		for (let i = 0; i < binaryDerString2.length; i++) {
			buffer2[i] = binaryDerString2.charCodeAt(i);
		}

		const text = await window.crypto.subtle.decrypt(
			{
				name: 'RSA-OAEP',
			},
			privateKey,
			buffer2.buffer
		);

		return btoa(String.fromCharCode(...new Uint8Array(text)));

	},

	hexToUint8Array(hex) {
		if (hex.toString().length % 2 !== 0) {
			throw new Error("Invalid hex string length");
		}

		const len = hex.toString().length / 2;
		const bytes = new Uint8Array(len);
		for (let i = 0; i < len; i++) {
			const hex_slice = hex.toString().slice(i * 2, i * 2 + 2);
			const hex_byte = Number.parseInt(hex_slice, 16);
			bytes[i] = hex_byte;
		}

		return bytes;
	},

	async sourceDetailDraw(data) {
		let sourceEndpoint = '';
		let sourceAccessKeyId = '';
		let sourceSecretAccessKey = '';
		let type = 'mig';

		let decodeData = await func.responseDecodeData(data, type)
		let encodedData = JSON.stringify(decodeData.data)
		encodedData = encodedData.replaceAll("\"", "");

		let iv = decodeData.iv
		let aes = decodeData.aes
		let responseDecodeData = await responseDecodeDataWithAes(encodedData, aes, iv)
		let decodedData = JSON.parse(responseDecodeData)

		sourceEndpoint = decodedData.data.data.endpoint;
		sourceAccessKeyId = decodedData.data.data.accessKeyId;
		sourceSecretAccessKey = decodedData.data.data.secretAccessKey;

		let sourceData = {
			"sourceEndpoint": sourceEndpoint,
			"sourceAccessKeyId": sourceAccessKeyId,
			"sourceSecretAccessKey": sourceSecretAccessKey
		}

		let sourceDataWithRsa = await func.encodeRsaMigrationWebCryptoAPI(JSON.stringify(sourceData))

		sessionStorage.setItem('sourceData', sourceDataWithRsa);

	},

	async destinationDetailDraw(data) {
		let destinationEndpoint = '';
		let destinationAccessKeyId = '';
		let destinationSecretAccessKey = '';
		let type = 'mig';

		let decodeData = await func.responseDecodeData(data, type)
		let encodedData = JSON.stringify(decodeData.data)
		encodedData = encodedData.replaceAll("\"", "");

		let iv = decodeData.iv
		let aes = decodeData.aes
		let responseDecodeData = await responseDecodeDataWithAes(encodedData, aes, iv)
		let decodedData = JSON.parse(responseDecodeData)

		destinationEndpoint = decodedData.data.data.endpoint;
		destinationAccessKeyId = decodedData.data.data.accessKeyId;
		destinationSecretAccessKey = decodedData.data.data.secretAccessKey;

		let destinationData = {
			"destinationEndpoint": destinationEndpoint,
			"destinationAccessKeyId": destinationAccessKeyId,
			"destinationSecretAccessKey": destinationSecretAccessKey
		}

		let destinationDataWithRsa = await func.encodeRsaMigrationWebCryptoAPI(JSON.stringify(destinationData))

		sessionStorage.setItem('destinationData', destinationDataWithRsa);
	},

}