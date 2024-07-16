import { signal, effect, computed } from "@signe/reactive";






let count = signal(0);
let mul = computed(() => count() * 2);
let color = signal("red");

for (let i = 1; i <= 10; i++) {
  count.set(i);
}
