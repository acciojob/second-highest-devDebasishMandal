//your JS code here. If required.
	function secondHighest(arr) {
			//Write your code here
      let mx=Number.MIN_VALUE,sm=Number.MIN_VALUE;
      if(arr.length==0 || arr.length==1){
        return -Infinity;
      } else if(arr.length>1){
        for(let i=0;i<arr.length;i++){
          if(arr[i]>mx){
             sm=mx;
             mx=arr[i];
             
          }else if(arr[i]>sm && arr[i]!=mx){
            sm=arr[i];
          }
        }
      }
      return sm === Number.MIN_VALUE ? -Infinity : sm;			
		}

		// function Main(){ 
		// 	var n = prompt("Enter the number of elements");
		// 	var arr = [];
		// 	for (var i = 0; i < n; i++) {
		// 		arr[i] = prompt("Enter element " + (i+1));
		// 	}
		// 	alert(secondHighest(arr));
		// }
		// Main();