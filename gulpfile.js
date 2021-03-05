const gulp = require('gulp')
const sftp = require('gulp-sftp-up4')

// dev 后台管理
gulp.task('upload', () => {
  console.log('################# 正在部署到服务器 #################')
  gulp.src('./dist/**').pipe(
    sftp({
      host: '101.133.171.109',
      user: 'Administrator',
      pass: 'Lhw5461258',
      port: 22,
      remotePath: '/project1'
    })
  )
}
)
