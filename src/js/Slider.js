function requiredParam(param) {
    throw new Error('Missing required parameter => ' + param);
}

export class Slider {
  #currentIndex;

  constructor(idsList = []){
    this.sliderList = idsList;
    this.#currentIndex = 0;
  }

  init(){
     this.currentWrapperVideo = document.querySelector('.current');
     this.videosListWrapper = document.querySelector('.videos__list');
     this.nextBtn = document.querySelector('.right__control');
     this.prevBtn = document.querySelector('.left__control');

    //  render the video and the list of videos
    this.renderCurrentVideo(this.sliderList[this.#currentIndex].id);
    this.renderVideosList();

    // add event listeners to the next and previous buttons
    this.nextBtn.addEventListener('click', () => this.changeVideo(true));
    this.prevBtn.addEventListener('click', () => this.changeVideo(false));
  }

  changeVideo(isChangeToNext = true) {
    const beforeActionIndex = this.#currentIndex;
    isChangeToNext ?  this.next() : this.prev();
    if(beforeActionIndex === this.#currentIndex) return;
    this.renderCurrentVideo(this.sliderList[this.#currentIndex].id);
  }

  next() {
    if(this.#currentIndex + 1 >= this.sliderList.length) return;
    this.#currentIndex += 1;
  }

  prev(){
    if(this.#currentIndex - 1 < 0) return;
    this.#currentIndex -= 1;
  }

  setCurrentIndex(index) {
    this.#currentIndex = index;
  }

  renderCurrentVideo(id) {
    this.currentWrapperVideo.innerHTML = `<iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" allowfullscreen class="video__iframe"></iframe>`;
  }

  renderVideosList() {
    const htmlItemsVideos = this.sliderList.map((video, index) => {
      return /*html*/ `
        <div class="video__item" data-video-index=${index}>
          <figure class="video__thumbnail-wrapper">
            <img src="https://i.ytimg.com/vi/${video.id}/mqdefault.jpg" alt="Thubmnail of the video" class="video__thumbnail">
          </figure>
        </div>
      `;
    });
    this.videosListWrapper.innerHTML = htmlItemsVideos.join('');

    this.videosListWrapper.addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      console.log(e.target);
      if(!e.target.classList.contains('video__item')) return;
      console.log(e.target);
      const videoIndex = e.target.dataset.videoIndex;
      this.setCurrentIndex(videoIndex);
      this.renderCurrentVideo(this.sliderList[this.#currentIndex].id);
    });
  }
}
