async function clearAllData() {
    const db = await openDB();
  
    // images ストアをクリア
    const tx1 = db.transaction("images", "readwrite");
    const imagesStore = tx1.objectStore("images");
    imagesStore.clear();
  
    // people ストアをクリア
    const tx2 = db.transaction("people", "readwrite");
    const peopleStore = tx2.objectStore("people");
    peopleStore.clear();
  
    tx2.oncomplete = () => {
      alert("images と people の全データを削除しました。");
    };
  
    tx2.onerror = () => {
      alert("削除に失敗しました。");
    };
  }
  
