## study deno

# deno
```
전체 메뉴얼 https://deno.land/manual/getting_started/first_steps

1. 패키지를 작성하지 않는다.

2. 타입스크립트 자체 가능

3. 그냥 Deno가 패키지임

4. node_모듈s가 없다.

5. 커맨드라인에 deno를 치면 실행 됨. 커맨드 라인 툴 같은 느낌?

6. 심지어 FS가 deno에 자체적으로 들어있다.

7. 실행 명령어 deno run 파일명

8. 우와... 그냥 모듈 URL로 import 하는 구만...

9. Node와 똑같이 v8 엔진

10. Deno라는 객체를 글로벌 제공한다.
   - 모든 모듈을 제공 해주는 건 아니고, 특정 모듈만 제공 해 주는 듯.
   2020.05.16
   {
      Buffer: [Function: Buffer],
      readAll: [AsyncFunction: readAll],
      readAllSync: [Function: readAllSync],
      writeAll: [AsyncFunction: writeAll],
      writeAllSync: [Function: writeAllSync],
      build: {
      target: "x86_64-apple-darwin",
      arch: "x86_64",
      os: "darwin",
      vendor: "apple",
      env: undefined
      },
      chmodSync: [Function: chmodSync],
      chmod: [AsyncFunction: chmod],
      chownSync: [Function: chownSync],
      chown: [AsyncFunction: chown],
      customInspect: Symbol(Deno.symbols.customInspect),
      inspect: [Function: inspect],
      copyFileSync: [Function: copyFileSync],
      copyFile: [AsyncFunction: copyFile],
      DiagnosticCategory: {
      0: "Log",
      1: "Debug",
      2: "Info",
      3: "Error",
      4: "Warning",
      5: "Suggestion",
      Log: 0,
      Debug: 1,
      Info: 2,
      Error: 3,
      Warning: 4,
      Suggestion: 5
      },
      chdir: [Function: chdir],
      cwd: [Function: cwd],
      errors: {
      NotFound: [Function: NotFound],
      PermissionDenied: [Function: PermissionDenied],
      ConnectionRefused: [Function: ConnectionRefused],
      ConnectionReset: [Function: ConnectionReset],
      ConnectionAborted: [Function: ConnectionAborted],
      NotConnected: [Function: NotConnected],
      AddrInUse: [Function: AddrInUse],
      AddrNotAvailable: [Function: AddrNotAvailable],
      BrokenPipe: [Function: BrokenPipe],
      AlreadyExists: [Function: AlreadyExists],
      InvalidData: [Function: InvalidData],
      TimedOut: [Function: TimedOut],
      Interrupted: [Function: Interrupted],
      WriteZero: [Function: WriteZero],
      UnexpectedEof: [Function: UnexpectedEof],
      BadResource: [Function: BadResource],
      Http: [Function: Http],
      Busy: [Function: Busy]
      },
      File: [Function: File],
      open: [AsyncFunction: open],
      openSync: [Function: openSync],
      create: [Function: create],
      createSync: [Function: createSync],
      stdin: Stdin { rid: 0 },
      stdout: Stdout { rid: 1 },
      stderr: Stderr { rid: 2 },
      seek: [Function: seek],
      seekSync: [Function: seekSync],
      read: [AsyncFunction: read],
      readSync: [Function: readSync],
      write: [AsyncFunction: write],
      writeSync: [Function: writeSync],
      watchFs: [Function: watchFs],
      internal: Symbol(Deno.internal),
      copy: [AsyncFunction: copy],
      iter: [AsyncGeneratorFunction: iter],
      iterSync: [GeneratorFunction: iterSync],
      SeekMode: { 0: "Start", 1: "Current", 2: "End", Start: 0, Current: 1, End: 2 },
      makeTempDirSync: [Function: makeTempDirSync],
      makeTempDir: [Function: makeTempDir],
      makeTempFileSync: [Function: makeTempFileSync],
      makeTempFile: [Function: makeTempFile],
      metrics: [Function: metrics],
      mkdirSync: [Function: mkdirSync],
      mkdir: [AsyncFunction: mkdir],
      connect: [AsyncFunction: connect],
      listen: [Function: listen],
      dir: [Function: dir],
      env: { get: [Function: getEnv], toObject: [Function: toObject], set: [Function: setEnv] },
      exit: [Function: exit],
      execPath: [Function: execPath],
      run: [Function: run],
      Process: [Function: Process],
      readDirSync: [Function: readDirSync],
      readDir: [Function: readDir],
      readFileSync: [Function: readFileSync],
      readFile: [AsyncFunction: readFile],
      readTextFileSync: [Function: readTextFileSync],
      readTextFile: [AsyncFunction: readTextFile],
      readLinkSync: [Function: readLinkSync],
      readLink: [Function: readLink],
      realPathSync: [Function: realPathSync],
      realPath: [Function: realPath],
      removeSync: [Function: removeSync],
      remove: [AsyncFunction: remove],
      renameSync: [Function: renameSync],
      rename: [AsyncFunction: rename],
      resources: [Function: resources],
      close: [Function: close],
      statSync: [Function: statSync],
      lstatSync: [Function: lstatSync],
      stat: [AsyncFunction: stat],
      lstat: [AsyncFunction: lstat],
      connectTls: [AsyncFunction: connectTls],
      listenTls: [Function: listenTls],
      truncateSync: [Function: truncateSync],
      truncate: [AsyncFunction: truncate],
      isatty: [Function: isatty],
      version: { deno: "1.0.0", v8: "8.4.300", typescript: "3.9.2" },
      writeFileSync: [Function: writeFileSync],
      writeFile: [AsyncFunction: writeFile],
      writeTextFileSync: [Function: writeTextFileSync],
      writeTextFile: [AsyncFunction: writeTextFile],
      test: [Function: test],
      core: {
      print: [Function],
      recv: [Function],
      send: [Function],
      setMacrotaskCallback: [Function],
      evalContext: [Function],
      formatError: [Function],
      encode: [Function],
      decode: [Function],
      getPromiseDetails: [Function],
      shared: SharedArrayBuffer {},
      setAsyncHandler: [Function: setAsyncHandler],
      dispatch: [Function: dispatch],
      ops: [Function: ops],
      sharedQueue: {
         MAX_RECORDS: 100,
         head: [Function: head],
         numRecords: [Function: numRecords],
         size: [Function: size],
         push: [Function: push],
         reset: [Function: reset],
         shift: [Function: shift]
      }
      },
      args: [],
      pid: 90142,
      noColor: false,
      Symbol(Deno.internal): {}
   }

   11. restful API가 내장되어 있음. ( fetch )
```

# 느끼는 단점들
```
1. 필요한 라이브러리들을 import할 때 공식 라이브러리들은 deno.land에서 가져와야 하는데,
남들이 작성해놓은 가이드 문서를 참고하면 안된다.

모듈들이 사라져 있거나, 버전업으로 인해 URL이 바껴있음.. 수시로 deno.land를 참고해야 하나?
hint => https://deno.land/std

2. Deno에서는 생각보다 Permission Denied가 많다.
   - 해결: deno는 node.js보다 보안적으로 더 향상 시켰기 때문에, 권한을 요구 하는데, 공부할 때는 가급적 --allow-all 하는게 낫다.

3. import로 모듈을 웹에서 가져와서 다운로드 하는데... vscode에선 ts 파일은 못가져온다고 경고가 뜬다..
   - 해결: vscode에서 deno 플러그인 설치 해줘야 함. (deno는 성격 상 따로 예외에 제외한 듯)

4. 제일 불편한 점
   node처럼 프로젝트 내부에서 node_모듈s에만 모듈을 떨굴 수 있는 게 아닌,

   URL로 import를 하면 앞 서 적은 것처럼 다운로드를 하고, 머신 내부에 cache로 설치 해버린다.

   // i'm mac user
   your machine/Libray/Caches/deno/deps/module_name

5. Global keyword Deno!
   
   모든 모듈을 제공해주는 건 아니자만, 많은 모듈을 담고 있는데, 애도 플러그인 안깔면 에러 문구임.
```