interface VideoGameConsole {
  playGame(gameName: string): void;
}

class PlayStation4 implements VideoGameConsole {
  playGame(gameName: string): void {
    console.log(`playing ${gameName} on ps4`);
  }
}

class PlayStation3 implements VideoGameConsole {
  playGame(gameName: string): void {
    console.log(`playing ${gameName} on ps3`);
  }
}

class VideoGameConsoleAdapter implements VideoGameConsole  {
  playstation4: PlayStation4;
  
  constructor(playstation4: PlayStation4) {
    this.playstation4 = playstation4;
  }

  playGame(gameName: string): void {
    let gameNameStr = `${gameName} via backward compability`;
    this.playstation4.playGame(gameNameStr);
  }
}

class VideoAdapterMain {
  constructor() {
    let ps4: PlayStation4 = new PlayStation4();
    let videoGameConsoleAdapter: VideoGameConsoleAdapter = new VideoGameConsoleAdapter(ps4);
    videoGameConsoleAdapter.playGame(`Red Dead Redemption`);
  }
}

new VideoAdapterMain();