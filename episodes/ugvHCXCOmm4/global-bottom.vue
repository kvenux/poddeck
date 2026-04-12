<template>
  <a href="../../" class="poddeck-back" title="返回 PodDeck">
    ← PodDeck
  </a>
</template>

<style scoped>
.poddeck-back {
  position: fixed;
  top: 14px;
  left: 14px;
  z-index: 100;
  font-size: 10px;
  font-weight: 500;
  color: rgba(30, 30, 30, 0.4);
  text-decoration: none;
  padding: 3px 9px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-family: ui-sans-serif, system-ui, sans-serif;
  transition: all 0.15s ease;
}
.poddeck-back:hover {
  color: rgba(30, 30, 30, 0.95);
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
</style>
