(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{700:function(s,a,t){"use strict";t.r(a);var n=t(62),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git常用命令"}},[s._v("#")]),s._v(" Git常用命令")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://gitee.com/liaoxuefeng/learn-java/raw/master/teach/git-cheatsheet.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git常用命令下载"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"_1create"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1create"}},[s._v("#")]),s._v(" 1CREATE")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Clone an existing repository/克隆现有仓库\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone ssh://user@domain.com/repo.git\n\nCreate a new "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" repository/新建本地仓库\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"_2-local-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-local-changes"}},[s._v("#")]),s._v(" 2.LOCAL CHANGES")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Changed files "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" your working directory/改变工作区\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n\nChanges to tracked files/查看改变\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v("\n\nAdd all current changes to the next commit/将所有当前更改添加到下一次提交\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" \n\nAdd some changes "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" to the next commit/在file中添加一些更改到下一次提交\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -a -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"注释"')]),s._v("\n\nCommit previously staged changes/提交以前暂存的更改\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit`\n\nChange the last commit/更改上次提交\n\nDon‘t amend published commits"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("/不要修改已发布的提交！\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("git commit")]),s._v(" "),t("p",[s._v("git add命令是个多功能命令，根据目标文件的状态不同，此命令的效果也不同：可以用它开始跟踪新文件，或者把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态等")]),s._v(" "),t("p",[s._v("我们需要用git add命令来跟踪新文件，但如果使用git commit -am可以省略使用git add命令将已跟踪文件放到暂存区的功能")]),s._v(" "),t("p",[s._v("有时你提交过代码之后，发现一个地方改错了，你下次提交时不想保留上一次的记录；或者你上一次的commit message的描述有误，这时候你可以使用接下来的这个命令：git commit --amend。")])]),s._v(" "),t("h2",{attrs:{id:"_3-commit-history"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-commit-history"}},[s._v("#")]),s._v(" 3.COMMIT HISTORY")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Show all commits, starting with newest/显示所有提交，从最新开始\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n\nShow changes over "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" a specific file/查看某个文件的详细修改\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log -p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nWho changed what and when "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/查看文件的每一行作者是谁\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" blame "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"_4-barnches-tags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-barnches-tags"}},[s._v("#")]),s._v(" 4.BARNCHES & TAGS")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("List all existing branches/查看所有存在的分支\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -av\n\nSwitch HEAD branch/切换分支\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nCreate a new branch based on your current HEAD/创建分支\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("new-branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nCreate a new tracking branch based on a remote branch/创建new-branch和跟踪origin/branch\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout --track "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("origin/branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nDelete a "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" branch/删除分支\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nMark the current commit with a tag/打一个标签\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tag-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("h3",{attrs:{id:"_2-5update-publish"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5update-publish"}},[s._v("#")]),s._v(" 2.5UPDATE & PUBLISH")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("List all currently configured remotes /列出所有当前配置的远程\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v\n\nShow information about a remote /显示远程库的信息\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote show "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nAdd new remote repository, named "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /添加新的远程库\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("shortname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nDownload all changes from "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(",  /从远程库下载\n\nbut don‘t integrate into HEAD/但不合并\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n如果要在本地分支查看和刚刚拷下来的东西有什么区别，就用origin/master:\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin master\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" yourlocalbranch oringin/master\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge oringin/master\n\nDownload changes and directly  merge/integrate  into  HEAD/下载更改并直接合并/集成到本地中\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull --rebase\n\nPublish "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" changes on a remote/发布本地更改到远程\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nDelete a branch on the remote/删除远程上的分支\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -dr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote/branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nPublish your tags/发布标签到远程\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --tags\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[t("em",[s._v("$ git pull --rebase")])]),s._v(" "),t("p",[s._v("git pull的默认行为是git fetch + git merge")]),s._v(" "),t("p",[s._v("git pull --rebase则是git fetch + git rebase.")]),s._v(" "),t("p",[t("em",[s._v("$ git fetch")])]),s._v(" "),t("p",[s._v("从远程获取最新版本到本地，不会自动合并分支")]),s._v(" "),t("p",[t("em",[s._v("$ git rebase")])]),s._v(" "),t("p",[s._v("git rebase，顾名思义，就是重新定义（re）起点（base）的作用，即重新定义分支的版本库状态。本地更新分支节点过程如下图所示")]),s._v(" "),t("p",[s._v("$ git pull --rebase")]),s._v(" "),t("p",[s._v('git pull --rebase执行过程中会将本地当前分支里的每个提交(commit)取消掉，然后把将本地当前分支更新为最新的"origin"分支')]),s._v(" "),t("p",[t("strong",[s._v("执行完git pull --rebase之后如果有合并冲突，使用以下三种方式处理这些冲突：")])]),s._v(" "),t("p",[s._v("git rebase --abort 会放弃合并，回到rebase操作之前的状态，之前的提交的不会丢弃；")]),s._v(" "),t("p",[s._v("git rebase --skip 则会将引起冲突的commits丢弃掉（慎用！！）；")]),s._v(" "),t("p",[s._v('git rebase --continue 合并冲突，结合"git add 文件"命令一起用与修复冲突，提示开发者，一步一步地有没有解决冲突。（fix conflicts and then run “git rebase --continue”）')]),s._v(" "),t("p",[s._v("对上述冲突的处理")]),s._v(" "),t("p",[s._v("1、使用 $git rebase --abort")]),s._v(" "),t("p",[s._v("执行之后，本地内容会回到提交之间的状态，也就是回到以前提交但没有pull是的状态，简单来说就是撤销rebase。")]),s._v(" "),t("p",[s._v("2、使用 $git rebase --skip")]),s._v(" "),t("p",[s._v("git rebase --skip 引起冲突的commits会被丢弃，对于本文应用的例子来说开发者A对c.sh文件的commit无效，开发者A自己修改的部分全部无效，因此，在使用skip时请慎重。")]),s._v(" "),t("p",[s._v("3、使用 $git rebase --continue")]),s._v(" "),t("p",[s._v('执行完$git pull --rebase 之后，本地如果产生冲突，手动解决冲突之后，用"git add"命令去更新这些内容的索引(index)，然后只要执行:')]),s._v(" "),t("p",[s._v("$ git rebase --continue 就可以线性的连接本地分支与远程分支，无误之后就回退出，回到主分支上。\n注意：一般情况下，修改后检查没问题，使用rebase continue来合并冲突。")])]),s._v(" "),t("h2",{attrs:{id:"_6-merge-rebase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-merge-rebase"}},[s._v("#")]),s._v(" 6.MERGE & REBASE")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Merge "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" into your current HEAD/合并分支\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge\n\nRebase your current HEAD onto "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/合并分支\n\nDon‘t rebase published commits"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" \n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nAbort a rebase /会放弃合并，回到rebase操作之前的状态，之前的提交的不会丢弃\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --abort\n\nContinue a rebase after resolving conflicts /合并冲突，结合"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add 文件"')]),s._v("命令一起用与修复冲突，提示开发者，一步一步地有没有解决冲突。（fix conflicts and "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" run “git rebase --continue”）\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue\n\nUse your configured merge tool to  solve conflicts  /git mergetool命令用于运行合并冲突解决工具来解决合并冲突。使用git mergetool运行合并实用程序来解决合并冲突。它通常在git合并后运行。\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" mergetool\n\nUse your editor to manually solve conflicts and  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("after resolving"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" mark "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" as resolved /使用编辑器手动解决冲突并（在解决后）将文件标记为已解决\n\n添加到暂存区\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("resolved-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" 命令只是删除工作区的文件\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("resolved-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("h2",{attrs:{id:"_7-undo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-undo"}},[s._v("#")]),s._v(" 7.UNDO")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Discard all "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" changes "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" your working  directory  /放弃工作目录中的所有本地更改\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD\n\nDiscard "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" changes "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a specific "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("  /放弃特定文件中的本地更改\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout HEAD "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nRevert a commit  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("by producing a new commit with contrary changes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" /撤销某次操作，此次操作之前和之后的commit和history都会保留，并且把这次撤销作为一次最新的提交\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" revert "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nReset your HEAD pointer to a previous commit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".and discard all changes since "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" /回滚以前的commit\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".and preserve all changes as unstaged changes \n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".and preserve uncommitted "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" changes /保留未提交的本地更改\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --keep "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[t("code",[s._v("git reset --hard <commit>")])]),s._v(" "),t("p",[t("code",[s._v("git reset <commit>")])]),s._v(" "),t("p",[s._v("有了参数--hard,直接把工作区的内容也修改了，慎用")]),s._v(" "),t("p",[s._v("不加--hard的时候只是操作了暂存区，不影响工作区的")])])])}),[],!1,null,null,null);a.default=e.exports}}]);