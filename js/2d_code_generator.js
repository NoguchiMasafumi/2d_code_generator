			//*********
			document.getElementById("code").focus();
			document.getElementById("but").addEventListener("click", async({target})=>{
				document.getElementById("canvas").getContext("bitmaprenderer").transferFromImageBitmap((await 2d_code_generate(document.getElementById("code").value)).transferToImageBitmap());
			});

			//*********
			function 2d_code_generate(data){
				const canvas = new OffscreenCanvas(1, 1);
				$("#canvas").show()
				return new Promise((res, rej) => QRCode.toCanvas(canvas, data, {}, err => !err ? res(canvas) : rej(err)));
			}

			//*********
			function inp_reset(){
				$("#code").val("");
				$("#canvas").hide("slow");
			}
