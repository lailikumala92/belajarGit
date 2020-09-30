# belajarGit
# Panduan Penggunaan Git

* [Mengunduh repository ke dalam komputer](http://https://github.com/datascienceid/README#mengunduh-repository)
* [Memperbarui repository yang telah diunduh](https://github.com/datascienceid/README#memperbarui-repository)
* [Mengunggah perubahan ke dalam repository](https://github.com/datascienceid/README#mengunggah-perubahan)
* [Menghapus file](https://github.com/datascienceid/README#menghapus-file)
* [Branching](https://github.com/datascienceid/README#branching)
* [Perintah tambahan](https://github.com/datascienceid/README#perintah-tambahan)
* [gitignore](https://github.com/datascienceid/README#gitignore)

## Mengunduh Repository

Unduh repository ke dalam komputer menggunakan perintah `git clone`. Url
repository dapat dilihat di dalam repository yang diinginkan.

```
git clone <url repository> <folder tujuan>
```

#### Contoh

```
user@host:~$ git clone https://github.com/datascienceid/instagram.git instagram
Cloning into 'instagram'...
remote: Counting objects: 4, done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 4 (delta 0), reused 4 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), done.
```

## Memperbarui Repository

Perbarui repository yang telah diunduh ke dalam komputer menggunakan perintah
`git pull`.

```
git pull origin <nama branch>
```

#### Contoh

```
git pull https://github.com/datascienceid/instagram.git master
From https://github.com/datascienceid/instagram
 * branch            master     -> FETCH_HEAD
Already up-to-date.
```

## Mengunggah Perubahan

Jangan lupa untuk melakukan pull terlebih dahulu sebelum melakukan push.

**Tambah file baru atau ubah file**

```
git add <nama file>
```

**Konfirmasi penambahan atau perubahan file**

```
git commit -m "<pesan commit>"
```

**Kirim perubahan ke dalam repository**

```
git push origin <nama branch>
```

#### Contoh

```
user@host:~$ git add README.md

user@host:~$ git commit -m "Menambahkan readme"
[master 224c510] Menambahkan readme
 1 file changed, 1 insertion(+)
 create mode 100644 README.md

user@host~$ git push origin master
Counting objects: 3, done.
Delta compression using up to 16 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 271 bytes | 0 bytes/s, done.
Total 2 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local objects.
To https://github.com/datascienceid/instagram.git
   fec3a1f..224c510  master -> master
```

## Menghapus File

Hapus file dari repository menggunakan perintah `git rm`, diikuti dengan `git commit`, dan `git push`.

```
git rm <nama file>
```

#### Contoh

```
user@host~$ git rm README.md
rm 'README.md'

user@host~$ git commit -m
[master 658a76e] Menghapus README
 1 file changed, 1 deletion(-)
 delete mode 100644 README.md

user@host~$
Counting objects: 3, done.
Delta compression using up to 16 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 236 bytes | 0 bytes/s, done.
Total 2 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local objects.
To https://github.com/datascienceid.git
   224c510..658a76e  master -> master
