import { firstVideo } from "./HeroVideo.astro.0.mts"

if (firstVideo) {
  const videos = document.querySelectorAll(
    ".video"
  ) as NodeListOf<HTMLMediaElement>

  if (firstVideo.readyState >= 3) {
    videos.forEach((videoEl) => {
      videoEl.classList.remove("hidden")
      videoEl.classList.add("animate-fade")
    })

    return
  }

  firstVideo.addEventListener("loadeddata", () => {
    videos.forEach((videoEl) => {
      videoEl.classList.remove("hidden")
      videoEl.classList.add("animate-fade")
    })
  })
}
