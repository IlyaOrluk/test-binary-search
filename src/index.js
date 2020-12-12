let my_list = [];
const list_item_count = 10000;
for (let i = 1; i < list_item_count; i++) {
  my_list = [...my_list, i];
}
const binary_search = (list, item) => {
  let low = 0,
    high = list.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
};

const binary_search_recursive = (list, item, low, high) => {
  let mid = Math.floor((low + high) / 2);
  let guess = list[mid];

  if (guess === item) {
    return mid;
  }

  if (guess > item) {
    return binary_search_recursive(list, item, low, mid - 1);
  } else if (guess < item) {
    return binary_search_recursive(list, item, mid + 1, high);
  }
};

const forEachSearch = (list, item) => {
  list.forEach((i, id) => {
    i === item && console.log(id);
  });
};

const nativeFor = (list, item) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return i;
    }
  }
};

console.time("binary_search");
console.log(binary_search(my_list, 12));
console.timeEnd("binary_search");

console.time("binary_search_recursive");
console.log(
    binary_search_recursive(my_list, 12, 0, my_list.length - 1),
    "recursive"
  );
console.timeEnd("binary_search_recursive");

console.time("forEach");
forEachSearch(my_list, 12);
console.timeEnd("forEach");

console.time("for 1");
console.log(nativeFor(my_list, 12));
console.timeEnd("for 1");
