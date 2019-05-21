

EMOJIS=(' 🙄' ' 🤔' ' 🤗' ' 😬' ' 😤' ' 🤐' ' 👿' ' 👾' ' 💁' ' 🙈' ' 🙉' ' 🙊' ' 🍕' ' 🎱');

RANDOM_EMOJI() {
  SELECTED_EMOJI=${EMOJIS[$RANDOM % ${#EMOJIS[@]}]};
  echo $SELECTED_EMOJI;

}

function parse_git_branch {
  echo -n $(git branch --no-color 2>/dev/null | awk -v out=$1 '/^*/ { if(out=="") print $2; else print out}')
}

PS1='\n  $(RANDOM_EMOJI)  \[\e[m\]\[\e[1;32m\]\[\e[4;32m\]\u\[\e[m\] \[\e[0;37m\]\w\[\e[m\] \[\e[0;33m\]$(parse_git_branch) \[\e[m\]\[\e[1;32m\]\[\e[m\]\[\e[0;37m\]';
clear;

alias code='code-insiders'
alias foxnews='news fetch fox-news'

#please run as root
alias please='/usr/bin/sudo $(history -p !!)'

#clear iTerm scrollback history
alias clearf="printf '\e]50;ClearScrollback\a'";

#git
alias gith='git log --all --graph --pretty=format:"%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset" --abbrev-commit --date=relative';

#finder
alias finder='open -a finder';

#pygments cat
alias cat='pygmentize -O style=monokai -f console256 -g';

#beep sound
alias beep='tput bel';

#encrypt/decrypt
alias dec='openssl enc -d -aes128 -base64 -in';
alias enc='openssl enc -e -aes128 -base64 -in';

#convert m4a files to mp3 in the current folder
alias m4a2mp3='for f in *.m4a; do ffmpeg -i "$f" -acodec libmp3lame -ab 320 "${f%.m4a}.mp3"; done';
alias flac2mp3='(for FILE in *.flac ; do ffmpeg -i "$FILE" -f mp3 -ab 192000 "`basename "$FILE" .flac`.mp3" || break; done)';

#vagrant shortcuts
alias vup='vagrant up';
alias vsu='vagrant suspend';
alias vss='vagrant ssh';

#alias
alias ll='ls -al';

alias ..='cd ..'
alias ...='cd ../..'
alias bofh='fortune bofh-excuses'
alias bounce_swap='sudo swapoff -a && sleep 10 && sudo swapon -a'
alias ls='ls --color=auto --group-directories-first'

#theos
export THEOS=/opt/theos
export PATH=$THEOS/bin:$PATH
export THEOS_DEVICE_IP=example.local THEOS_DEVICE_PORT=22

cd() {
    builtin cd "$@" && ls -lA
}


extract() {
    if [ -z ${1} ] || [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
        echo "Usage: extract <archive> [directory]"
        echo "Example: extract presentation.zip."
        echo "Valid archive types are:"
        echo "tar.bz2, tar.gz, tar.xz, tar, bz2, gz, tbz2,"
        echo "tbz, tgz, lzo, rar, zip, 7z, xz, txz, lzma and tlz"
    else
        case "$1" in
            *.tar.bz2|*.tbz2|*.tbz)         tar xvjf "$1" ;;
            *.tgz)                          tar zxvf "$1" ;;
            *.tar.gz)                       tar xvzf "$1" ;;
            *.tar.xz)                       tar xvJf "$1" ;;
            *.tar)                          tar xvf "$1" ;;
            *.rar)                          7z x "$1" ;;
            *.zip)                          unzip "$1" ;;
            *.7z)                           7z x "$1" ;;
            *.lzo)                          lzop -d  "$1" ;;
            *.gz)                           gunzip "$1" ;;
            *.bz2)                          bunzip2 "$1" ;;
            *.Z)                            uncompress "$1" ;;
            *.xz|*.txz|*.lzma|*.tlz)        xz -d "$1" ;;
            *) echo "Sorry, '$1' could not be decompressed." ;;
        esac
    fi
}


