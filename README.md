# CvSU Mini Store — React Props & Component Communication

## Lab 3 Guide Questions

1. **Props vs. State:** Props are read-only data passed into a component from its parent. State is data owned and managed inside a component that can change over time (via `useState`), causing re-renders.

2. **Why a child cannot modify props:** Props are owned by the parent. If children could mutate them, data flow would become unpredictable. React enforces one-way data flow.

3. **How `onAddToCart` enables child → parent data flow:** The parent passes a function as a prop. The child calls that function and passes its own data as an argument. The parent's function runs with that data, sending information "upward".

4. **Why `key` is required in `.map()`:** `key` gives each list item a stable identity so React can efficiently match items between renders. Without it, React may reuse the wrong DOM node, causing state glitches.

5. **What `children` enables:** `children` lets you pass arbitrary JSX/content between a component's opening and closing tags. It allows the parent to inject flexible markup without the child knowing what that content is.

# CvSU Mini Store — Lab 4 (Live Search & Filter)

## Lab 4 Guide Questions

1. **Why use `searchText` and `debouncedSearch` separately?** `searchText` updates immediately to keep the input responsive. `debouncedSearch` only updates after a delay, preventing the expensive filtering logic from running on every keystroke.
2. **What happens without a cleanup function?** The `setTimeout` timers stack up. Typing 10 letters quickly runs 10 timers, causing unnecessary re-renders and memory leaks.
3. **Purpose of the dependency array?** It controls when the effect runs. Empty `[]` runs once on mount. Leaving it out runs on every render (causing infinite loops if setting state).
4. **Why avoid sorting the original array?** Mutating the original array breaks the data globally. `[...array]` creates a safe copy.
5. **Is the filtered list better as state or calculated?** Calculated. It's "derived state". Storing it in state creates redundant data that can get out of sync.