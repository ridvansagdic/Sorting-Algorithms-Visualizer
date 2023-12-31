// AlgorithmType.js

function bubbleSort(sortOrder, ...arr) {
    var len = arr.length;
    var steps = []; // Adımları tutacak matris

    var swapped;

    for (var i = 0; i < len - 1; i++) {
        swapped = false;

        for (var j = 0; j < len - 1; j++) {
            var shouldSwap;

            if (sortOrder === "ascending") {
                shouldSwap = arr[j] > arr[j + 1];
            } else if (sortOrder === "descending") {
                shouldSwap = arr[j] < arr[j + 1];
            } else {
                return [];
            }


            if (shouldSwap) {
                // Swap işlemi
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;

                // Adım bilgisini matrise ekle
                steps.push({
                    step: i + 1,
                    comparison: `Tested ${arr[j]} to ${arr[j + 1]}, swapped`,
                    array: [...arr] // Diziyi kopyala
                });
            } else if (arr[i]) {
                // Adım bilgisini matrise ekle (swap yapılmadı)
                steps.push({
                    step: i + 1,
                    comparison: `Tested ${arr[j]} to ${arr[j + 1]}, no swaps`,
                    array: [...arr] // Diziyi kopyala
                });
            }
        }

        // Eğer herhangi bir swap işlemi olmadıysa, dizi zaten sıralıdır.
        if (!swapped) {
            steps.push({
                step: i + 1,
                comparison: `Tested ${arr[j]} to ${arr[j + 1]}, no swaps`,
                array: [...arr] // Diziyi kopyala
            });
            
        }
    }
    return steps;
}

function selectionSort(sortOrder, ...arr) {
    var len = arr.length;
    var steps = []; // Adımları tutacak matris

    for (var i = 0; i < len - 1; i++) {
        var minIndex = i;

        for (var j = i + 1; j < len; j++) {
            var shouldSwap;

            if (sortOrder === "ascending") {
                shouldSwap = arr[j] < arr[minIndex];
            } else if (sortOrder === "descending") {
                shouldSwap = arr[j] > arr[minIndex];
            } else {
                return [];
            }

            if (shouldSwap) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            // Swap transaction
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;

            // Adım bilgisini matrise ekle
            steps.push({
                step: i + 1,
                comparison: `Tested ${arr[i]} to ${arr[minIndex]}, swapped`,
                array: [...arr] // Diziyi kopyala
            });
        } else {
            // Adım bilgisini matrise ekle (swap yapılmadı)
            steps.push({
                step: i + 1,
                comparison: `No swap needed for ${arr[i]}`,
                array: [...arr] // Diziyi kopyala
            });
        }

    }
    return steps;
}

function insertionSort(sortOrder, ...arr) {


    var len = arr.length;
    var steps = []; // Adımları tutacak matris


    for (var i = 1; i < len; i++) {
        var key = arr[i];
        var j = i - 1;

        while (j >= 0 && ((sortOrder === "ascending" && arr[j] > key) || (sortOrder === "descending" && arr[j] < key))) {
            // Swap işlemi
            arr[j + 1] = arr[j];
            j = j - 1;

            // Adım bilgisini matrise ekle
            steps.push({
                step: i,
                comparison: `Tested ${arr[j]} to ${key}, swapped`,
                array: [...arr] // Diziyi kopyala
            });
        }

        arr[j + 1] = key;

        // Adım bilgisini matrise ekle (swap yapılmadı)
        steps.push({
            step: i,
            comparison: `Tested ${arr[j + 1]} to ${key}, no swaps`,
            array: [...arr] // Diziyi kopyala
        });
    }
    return steps;
}

