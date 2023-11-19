function bubbleSort(arr) {
  var len = arr.length;

  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function sortArray() {
  var inputElement = document.getElementById('arrayInput');
  var inputArray = inputElement.value.split(',').map(Number);

  if (inputArray.length === 0) {
    alert('Please enter a valid array.');
    return;
  }

  var sortedArray = bubbleSort(inputArray);
  var resultElement = document.getElementById('result');
  resultElement.textContent = 'Sorted Array (Ascending): ' + sortedArray.join(', ');
}
