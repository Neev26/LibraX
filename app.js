

const USERS_KEY = 'bookstore_users_v1';
const CURR_KEY = 'bookstore_current_v1';
const THEME_KEY = 'bookstore_theme_v1';
const PLACEHOLDER = 'https://placehold.co/300x450?text=No+Cover';


const BOOKS = [
  {id:'hp1', title:"Harry Potter and the Sorcerer's Stone", author:"J.K. Rowling", category:"Novels", cover:"https://m.media-amazon.com/images/I/517CL0lWQ-L._SY445_SX342_FMwebp_.jpg", pdf:"https://hazidesaratcollege.ac.in/library/uploads/85jkr_harrypotter_1.pdf"},
  {id:'hp2', title:"Harry Potter and the Chamber of Secrets", author:"J.K. Rowling", category:"Novels", cover:"https://covers.openlibrary.org/b/isbn/0439064872-L.jpg", pdf:"https://hazidesaratcollege.ac.in/library/uploads/4jkr_harrypotter_2.pdf"},
  {id:'hp3', title:"Harry Potter and the Prisoner of Azkaban", author:"J.K. Rowling", category:"Novels", cover:"https://covers.openlibrary.org/b/isbn/0439136369-L.jpg", pdf:"https://vidyaprabodhinicollege.edu.in/VPCCECM/ebooks/ENGLISH%20LITERATURE/Harry%20potter/(Book%203)%20Harry%20Potter%20And%20The%20Prisoner%20Of%20Azkaban_001.pdf"},
  {id:'hp4', title:"Harry Potter and the Goblet of Fire", author:"J.K. Rowling", category:"Novels", cover:"https://covers.openlibrary.org/b/isbn/0439139600-L.jpg", pdf:"https://vidyaprabodhinicollege.edu.in/VPCCECM/ebooks/ENGLISH%20LITERATURE/Harry%20potter/(Book%204)%20Harry%20Potter%20And%20The%20Goblet%20Of%20Fire_001.pdf"},
  {id:'hp5', title:"Harry Potter and the Order of the Phoenix", author:"J.K. Rowling", category:"Novels", cover:"https://covers.openlibrary.org/b/isbn/0439358078-L.jpg", pdf:"https://afgjilibrary.wordpress.com/wp-content/uploads/2020/05/hp5-harry-potter-and-the-order-of-the-phoenix.pdf"},
  {id:'hp6', title:"Harry Potter and the Half-Blood Prince", author:"J.K. Rowling", category:"Novels", cover:"https://covers.openlibrary.org/b/isbn/0439785960-L.jpg", pdf:"https://hazidesaratcollege.ac.in/library/uploads/43jkr_harrypotter_6.pdf"},
  {id:'hp7', title:"Harry Potter and the Deathly Hallows", author:"J.K. Rowling", category:"Novels", cover:"https://covers.openlibrary.org/b/isbn/0545010225-L.jpg", pdf:"https://vidyaprabodhinicollege.edu.in/VPCCECM/ebooks/ENGLISH%20LITERATURE/Harry%20potter/(Book%207)%20Harry%20Potter%20And%20The%20Deathly%20Hallows.pdf"},

  {id:'alchemist', title:"The Alchemist", author:"Paulo Coelho", category:"Novels", cover:"https://covers.openlibrary.org/b/isbn/0061122416-L.jpg", pdf:"https://archive.org/download/OceanofPDF.comTheAlchemist/_OceanofPDF.com_The_Alchemist.pdf"},
  {id:'fault', title:"The Fault in Our Stars", author:"John Green", category:"Novels", cover:"https://covers.openlibrary.org/b/id/7305682-L.jpg", pdf:"https://spensabayalibrary.wordpress.com/wp-content/uploads/2016/04/the-fault-in-our-stars.pdf"},
  {id:'pride', title:"Pride and Prejudice", author:"Jane Austen", category:"Novels", cover:"https://covers.openlibrary.org/b/isbn/0141439513-L.jpg", pdf:"http://giove.isti.cnr.it/demo/eread/Libri/joy/Pride.pdf"},
  {id:'gatsby', title:"The Great Gatsby", author:"F. Scott Fitzgerald", category:"Classics", cover:"https://covers.openlibrary.org/b/isbn/0743273567-L.jpg", pdf:"https://www.planetebook.com/free-ebooks/the-great-gatsby.pdf"},
  {id:'mockingbird', title:"To Kill a Mockingbird", author:"Harper Lee", category:"Classics", cover:"https://covers.openlibrary.org/b/id/12606523-L.jpg", pdf:"https://www.raio.org/TKMFullText.pdf"},
  {id:'moby', title:"Moby Dick", author:"Herman Melville", category:"Classics", cover:"https://covers.openlibrary.org/b/id/10720365-L.jpg", pdf:"https://uberty.org/wp-content/uploads/2015/12/herman-melville-moby-dick.pdf"},
  {id:'warpeace', title:"War and Peace", author:"Leo Tolstoy", category:"Classics", cover:"https://covers.openlibrary.org/b/id/6695695-L.jpg", pdf:"https://archive.org/download/war-peace/war-peace.pdf"},

  {id:'sherlock', title:"Sherlock Holmes: Complete", author:"Arthur Conan Doyle", category:"Mystery", cover:"https://covers.openlibrary.org/b/id/12501284-L.jpg", pdf:"https://archive.org/download/ost-english-sherlockholmescomplete/SherlockHolmesComplete.pdf"},
  {id:'davinci', title:"The Da Vinci Code", author:"Dan Brown", category:"Mystery", cover:"https://covers.openlibrary.org/b/id/8396611-L.jpg", pdf:"https://dn790007.ca.archive.org/0/items/TheDaVinciCode_201308/The%20Da%20Vinci%20Code.pdf"},
  {id:'orient', title:"Murder on the Orient Express", author:"Agatha Christie", category:"Mystery", cover:"https://covers.openlibrary.org/b/id/10249381-L.jpg", pdf:"https://www.by-the-way.fr/wp-content/uploads/2021/02/Murder-on-the-Orient-Express-1.pdf"},
  {id:'gonegirl', title:"Gone Girl", author:"Gillian Flynn", category:"Mystery", cover:"https://covers.openlibrary.org/b/id/11567588-L.jpg", pdf:"https://icrrd.com/public/media/15-05-2021-082725Gone-Girl-Gillian-Flynn.pdf"},
  {id:'dragon', title:"The Girl with the Dragon Tattoo", author:"Stieg Larsson", category:"Mystery", cover:"https://covers.openlibrary.org/b/id/10544744-L.jpg", pdf:"https://dn790002.ca.archive.org/0/items/stieglarssonmillenium01thegirlwiththedragontatoopdf/Stieg%20Larsson%20-%20Millenium%2001%20-%20The%20Girl%20With%20The%20Dragon%20Tatoo%20PDF.pdf"},

  {id:'treasure', title:"Treasure Island", author:"R.L. Stevenson", category:"Adventure", cover:"https://covers.openlibrary.org/b/id/12819044-L.jpg", pdf:"https://www1.udel.edu/LLL/language/deutsch/handouts/summer_2015/Schatzinsel_E.pdf"},
  {id:'journey', title:"Journey to the Center of the Earth", author:"Jules Verne", category:"Adventure", cover:"https://covers.openlibrary.org/b/id/4694197-L.jpg", pdf:"https://online.tathagat.co.in/wp-content/uploads/wpforo/attachments/21736/826-jules-vernejourney-to-the-center-of-the-earth.pdf"},
  {id:'robinson', title:"Robinson Crusoe", author:"Daniel Defoe", category:"Adventure", cover:"https://covers.openlibrary.org/b/id/7102817-L.jpg", pdf:"https://www.suneo.mx/literatura/subidas/Daniel%20Defoe%20Robinson%20Crusoe.pdf"},
  {id:'hobbit', title:"The Hobbit", author:"J.R.R. Tolkien", category:"Fantasy", cover:"https://covers.openlibrary.org/b/isbn/054792822X-L.jpg", pdf:"https://rsd2-alert-durden-reading-room.weebly.com/uploads/6/7/1/6/6716949/the_hobbit_tolkien.pdf"},
  {id:'lotr1', title:"The Fellowship of the Ring", author:"J.R.R. Tolkien", category:"Fantasy", cover:"https://covers.openlibrary.org/b/isbn/0547928211-L.jpg", pdf:"https://archive.org/download/j-r-r-tolkien-lord-of-the-rings-01-the-fellowship-of-the-ring-retail-pdf/j-r-r-tolkien-lord-of-the-rings-01-the-fellowship-of-the-ring-retail-pdf.pdf"},

  {id:'dracula', title:"Dracula", author:"Bram Stoker", category:"Horror", cover:"https://covers.openlibrary.org/b/isbn/0486411095-L.jpg", pdf:"https://www.bramstoker.org/pdf/novels/05dracula.pdf"},
  {id:'frankenstein', title:"Frankenstein", author:"Mary Shelley", category:"Horror", cover:"https://covers.openlibrary.org/b/isbn/0486282112-L.jpg", pdf:"https://ia802908.us.archive.org/9/items/Frankenstein1818Edition/frank-a5.pdf"},
  {id:'shining', title:"The Shining", author:"Stephen King", category:"Horror", cover:"https://covers.openlibrary.org/b/id/14843732-L.jpg", pdf:"https://englishprofi.com.ua/wp-content/uploads/Stephen-King-The-Shining.pdf"},
  {id:'it', title:"It", author:"Stephen King", category:"Horror", cover:"https://covers.openlibrary.org/b/id/15141087-L.jpg", pdf:"https://havenner.weebly.com/uploads/2/0/5/7/20575006/stephen_king_-_it_1986.pdf"},
  {id:'panchatantra', title:"Panchatantra Stories", author:"Vishnu Sharma", category:"Stories", cover:"https://covers.openlibrary.org/b/id/10487646-L.jpg", pdf:"https://www.banyantree.in/jagdishpur/wp-content/uploads/2020/06/Panchatantra-.pdf"},

  {id:'gulliver', title:"Gulliver's Travels", author:"Jonathan Swift", category:"Stories", cover:"https://covers.openlibrary.org/b/id/13807714-L.jpg", pdf:"https://antilogicalism.com/wp-content/uploads/2018/04/gullivers-travels.pdf"},
  {id:'andersen', title:"Fairy Tales (Andersen)", author:"Hans Christian Andersen", category:"Stories", cover:"https://covers.openlibrary.org/b/id/5922699-L.jpg", pdf:"https://archive.org/download/fairytalesfromha00ande3/fairytalesfromha00ande3.pdf"},
  {id:'grimm', title:"Grimm's Fairy Tales", author:"Brothers Grimm", category:"Stories", cover:"https://covers.openlibrary.org/b/id/6377119-L.jpg", pdf:"https://archive.org/download/grimmscompletefa00grim/grimmscompletefa00grim.pdf"},
  {id:'hobbit2', title:"The Hobbit (paperback)", author:"J.R.R. Tolkien", category:"Fantasy", cover:"https://covers.openlibrary.org/b/id/14623994-L.jpg", pdf:"https://rsd2-alert-durden-reading-room.weebly.com/uploads/6/7/1/6/6716949/the_hobbit_tolkien.pdf"},

  {id:'atomic', title:"Atomic Habits", author:"James Clear", category:"Self-help", cover:"https://covers.openlibrary.org/b/id/15108516-L.jpg", pdf:"https://dn790007.ca.archive.org/0/items/atomic-habits-pdfdrive/Atomic%20habits%20%28%20PDFDrive%20%29.pdf"},
  {id:'richdad', title:"Rich Dad Poor Dad", author:"Robert Kiyosaki", category:"Self-help", cover:"https://covers.openlibrary.org/b/id/13778173-L.jpg", pdf:"http://fop86.com/Rich%20Dad%20Poor%20Dad/Rich%20Dad%20Poor%20Dad.pdf"},
  {id:'thinkgrow', title:"Think and Grow Rich", author:"Napoleon Hill", category:"Self-help", cover:"https://covers.openlibrary.org/b/id/14830267-L.jpg", pdf:"https://apex.oracle.com/pls/apex/lonestar/r/files/static/v13Y/Think-And-Grow-Rich_2011-06.pdf"},
  {id:'subtle', title:"The Subtle Art of Not Giving a F*ck", author:"Mark Manson", category:"Self-help", cover:"https://covers.openlibrary.org/b/id/14832101-L.jpg", pdf:"https://s1.papyruspub.com/files/demos/products/ebooks/novels/inspiring/Preview-The-Subtle-Art-of-Not-Giving-a-Fck.pdf"},
  {id:'4hour', title:"The 4-Hour Workweek", author:"Tim Ferriss", category:"Self-help", cover:"https://covers.openlibrary.org/b/id/6306016-L.jpg", pdf:"https://sistem42.com/wp-content/uploads/2022/08/Timothy-Ferriss-The-4-Hour-Workweek-.pdf"},

  {id:'powerhabit', title:"The Power of Habit", author:"Charles Duhigg", category:"Non-fiction", cover:"https://covers.openlibrary.org/b/id/14842390-L.jpg", pdf:"https://ia803102.us.archive.org/35/items/CharlesDuhigg.ThePowerOfHabit_201808/Charles-Duhigg.The-Power-of-Habit.pdf"},
  {id:'sapiens', title:"Sapiens", author:"Yuval Noah Harari", category:"Non-fiction", cover:"https://covers.openlibrary.org/b/id/15094106-L.jpg", pdf:"https://staibabussalamsula.ac.id/wp-content/uploads/2023/11/yuval_noah_harari-sapiens_a_brief_histor.pdf"},
  {id:'homo', title:"Homo Deus", author:"Yuval Noah Harari", category:"Non-fiction", cover:"https://covers.openlibrary.org/b/id/11731942-L.jpg", pdf:"https://readandlaugh.files.wordpress.com/2018/04/homo_deus_a_brief_history_of_tomorrow_pdf.pdf"},
  {id:'mans', title:"Man's Search for Meaning", author:"Viktor Frankl", category:"Non-fiction", cover:"https://covers.openlibrary.org/b/id/8513036-L.jpg", pdf:"https://www.stgregoriosudaipur.ac.in/pdf/fiction/632ecf70b27a5-man-s-search-for-meaning.pdf"},
  {id:'howtowin', title:"How to Win Friends and Influence People", author:"Dale Carnegie", category:"Non-fiction", cover:"https://covers.openlibrary.org/b/id/14548326-L.jpg", pdf:"https://dn720004.ca.archive.org/0/items/english-collections-1/How%20To%20Win%20Friends%20And%20Influence%20People%20-%20Carnegie%2C%20Dale.pdf"},

  {id:'lotr2', title:"The Two Towers", author:"J.R.R. Tolkien", category:"Fantasy", cover:"https://covers.openlibrary.org/b/isbn/0547928203-L.jpg", pdf:"http://rsd2-alert-durden-reading-room.weebly.com/uploads/6/7/1/6/6716949/02-the-two-towers.pdf"},
  {id:'lotr3', title:"The Return of the King", author:"J.R.R. Tolkien", category:"Fantasy", cover:"https://covers.openlibrary.org/b/isbn/054792819X-L.jpg", pdf:"http://rsd2-alert-durden-reading-room.weebly.com/uploads/6/7/1/6/6716949/03-the-return-of-the-king.pdf"},
  {id:'narnia', title:"The Lion, the Witch and the Wardrobe", author:"C.S. Lewis", category:"Fantasy", cover:"https://covers.openlibrary.org/b/isbn/0064471047-L.jpg", pdf:"http://www.samizdat.qc.ca/arts/lit/PDFs/LionWitchWardrobe_CSL.pdf"},
  {id:'goldfinch', title:"The Goldfinch", author:"Donna Tartt", category:"Contemporary", cover:"https://covers.openlibrary.org/b/id/12727864-L.jpg", pdf:"https://jerrywbrown.com/wp-content/uploads/2023/03/Donna-Tartt-The-goldfinch.pdf"},
  {id:'cloud', title:"Cloud Atlas", author:"David Mitchell", category:"Contemporary", cover:"https://covers.openlibrary.org/b/id/8746220-L.jpg", pdf:"https://todhartman.files.wordpress.com/2014/01/mitchell-david-cloud-atlas.pdf"},

  {id:'road', title:"The Road", author:"Cormac McCarthy", category:"Dystopia", cover:"https://covers.openlibrary.org/b/id/14858736-L.jpg", pdf:"https://mrsfieldstchs.weebly.com/uploads/3/7/7/1/37719247/the_road_-_text.pdf"},
  {id:'1984', title:"1984", author:"George Orwell", category:"Dystopia", cover:"https://covers.openlibrary.org/b/isbn/0451524934-L.jpg", pdf:"https://dn790002.ca.archive.org/0/items/NineteenEightyFour-Novel-GeorgeOrwell/orwell1984.pdf"},
  {id:'brave', title:"Brave New World", author:"Aldous Huxley", category:"Dystopia", cover:"https://covers.openlibrary.org/b/id/12645086-L.jpg", pdf:"https://archive.org/download/BraveNewWorld-and-BraveNewWorldRevisited/Brave-New-World_-_Aldous-Huxley.pdf"},
  {id:'fahrenheit', title:"Fahrenheit 451", author:"Ray Bradbury", category:"Dystopia", cover:"https://covers.openlibrary.org/b/id/8461232-L.jpg", pdf:"https://lexiconic.net/english/F451.pdf"},

  {id:'catch22', title:"Catch-22", author:"Joseph Heller", category:"Classics", cover:"https://tommygirard.wordpress.com/wp-content/uploads/2023/12/catch-22-by-joseph-heller-book-cover.jpg", pdf:""},
  {id:'beloved', title:"Beloved", author:"Toni Morrison", category:"Classics", cover:PLACEHOLDER, pdf:""},
  {id:'ontheroad', title:"On the Road", author:"Jack Kerouac", category:"Classics", cover:PLACEHOLDER, pdf:""},
  {id:'oldmansea', title:"The Old Man and the Sea", author:"Ernest Hemingway", category:"Classics", cover:PLACEHOLDER, pdf:""},
  {id:'forwhom', title:"For Whom the Bell Tolls", author:"Ernest Hemingway", category:"Classics", cover:PLACEHOLDER, pdf:""},

  {id:'kafka', title:"The Metamorphosis", author:"Franz Kafka", category:"Classics", cover:"https://covers.openlibrary.org/b/isbn/0140629702-L.jpg", pdf:"https://www.gutenberg.org/ebooks/5200"},
  {id:'dickens', title:"A Tale of Two Cities", author:"Charles Dickens", category:"Classics", cover:"https://covers.openlibrary.org/b/isbn/0486417767-L.jpg", pdf:"https://www.gutenberg.org/ebooks/98"},
  {id:'oliver', title:"Oliver Twist", author:"Charles Dickens", category:"Classics", cover:"https://covers.openlibrary.org/b/isbn/0141439742-L.jpg", pdf:"https://www.gutenberg.org/ebooks/730"},
  {id:'huck', title:"The Adventures of Huckleberry Finn", author:"Mark Twain", category:"Classics", cover:"https://covers.openlibrary.org/b/isbn/0486280616-L.jpg", pdf:"https://www.gutenberg.org/ebooks/76"},
  {id:'tom', title:"The Adventures of Tom Sawyer", author:"Mark Twain", category:"Classics", cover:"https://covers.openlibrary.org/b/isbn/0486400777-L.jpg", pdf:"https://www.gutenberg.org/ebooks/74"},

  {id:'dostoevsky1', title:"Crime and Punishment", author:"Fyodor Dostoevsky", category:"Classics", cover:PLACEHOLDER, pdf:"https://www.gutenberg.org/ebooks/2554"},
  {id:'dostoevsky2', title:"The Brothers Karamazov", author:"Fyodor Dostoevsky", category:"Classics", cover:PLACEHOLDER, pdf:"https://www.gutenberg.org/ebooks/28054"},
  {id:'tolstoy1', title:"Anna Karenina", author:"Leo Tolstoy", category:"Classics", cover:PLACEHOLDER, pdf:"https://www.gutenberg.org/ebooks/1399"},
  {id:'flaubert', title:"Madame Bovary", author:"Gustave Flaubert", category:"Classics", cover:PLACEHOLDER, pdf:"https://www.gutenberg.org/ebooks/2413"},
  {id:'janeeyre', title:"Jane Eyre", author:"Charlotte Bronte", category:"Classics", cover:"https://covers.openlibrary.org/b/isbn/0141441143-L.jpg", pdf:"https://www.gutenberg.org/ebooks/1260"},

  {id:'wuthering', title:"Wuthering Heights", author:"Emily Bronte", category:"Classics", cover:"https://covers.openlibrary.org/b/isbn/0141439555-L.jpg", pdf:"https://www.gutenberg.org/ebooks/768"},
  {id:'orwell2', title:"Animal Farm", author:"George Orwell", category:"Dystopia", cover:"https://covers.openlibrary.org/b/isbn/0451526341-L.jpg", pdf:"https://www.gutenberg.org/ebooks/11254"},
  {id:'shelley2', title:"The Last Man", author:"Mary Shelley", category:"Sci-Fi", cover:PLACEHOLDER, pdf:""},
  {id:'bronte2', title:"Villette", author:"Charlotte Bronte", category:"Classics", cover:PLACEHOLDER, pdf:""},
  {id:'stevenson2', title:"Kidnapped", author:"R.L. Stevenson", category:"Adventure", cover:PLACEHOLDER, pdf:"https://www.gutenberg.org/ebooks/1202"},

  {id:'tolkien2', title:"The Silmarillion", author:"J.R.R. Tolkien", category:"Fantasy", cover:PLACEHOLDER, pdf:""},
  {id:'pullman', title:"His Dark Materials", author:"Philip Pullman", category:"Fantasy", cover:PLACEHOLDER, pdf:""},
  {id:'lecarre', title:"The Spy Who Came in from the Cold", author:"John le Carré", category:"Mystery", cover:PLACEHOLDER, pdf:""},
  {id:'coles', title:"The Silent Patient", author:"Alex Michaelides", category:"Mystery", cover:PLACEHOLDER, pdf:""},
  {id:'flynn2', title:"Sharp Objects", author:"Gillian Flynn", category:"Mystery", cover:PLACEHOLDER, pdf:""},

  {id:'king2', title:"Misery", author:"Stephen King", category:"Horror", cover:PLACEHOLDER, pdf:""},
  {id:'king3', title:"Carrie", author:"Stephen King", category:"Horror", cover:PLACEHOLDER, pdf:""},
  {id:'moreno', title:"Mexican Gothic", author:"Silvia Moreno-Garcia", category:"Horror", cover:PLACEHOLDER, pdf:""},
  {id:'salinger', title:"Catcher in the Rye", author:"J.D. Salinger", category:"YA", cover:PLACEHOLDER, pdf:""},
  {id:'moyes', title:"Me Before You", author:"Jojo Moyes", category:"Romance", cover:PLACEHOLDER, pdf:""},

  {id:'sparks', title:"The Notebook", author:"Nicholas Sparks", category:"Romance", cover:PLACEHOLDER, pdf:""},
  {id:'coelho2', title:"Brida", author:"Paulo Coelho", category:"Novels", cover:PLACEHOLDER, pdf:""},
  {id:'jon', title:"Norwegian Wood", author:"Haruki Murakami", category:"Contemporary", cover:PLACEHOLDER, pdf:""},
  {id:'murakami2', title:"Kafka on the Shore", author:"Haruki Murakami", category:"Contemporary", cover:PLACEHOLDER, pdf:""},
  {id:'khaled', title:"A Thousand Splendid Suns", author:"Khaled Hosseini", category:"Contemporary", cover:PLACEHOLDER, pdf:""},

  {id:'martel', title:"Life of Pi", author:"Yann Martel", category:"Contemporary", cover:PLACEHOLDER, pdf:""},
  {id:'chbosky', title:"The Perks of Being a Wallflower", author:"Stephen Chbosky", category:"YA", cover:PLACEHOLDER, pdf:""},
  {id:'rowell', title:"Eleanor & Park", author:"Rainbow Rowell", category:"YA", cover:PLACEHOLDER, pdf:""},
  {id:'lorenzo', title:"The Shadow of the Wind", author:"Carlos Ruiz Zafon", category:"Mystery", cover:PLACEHOLDER, pdf:""},
  {id:'rogers', title:"The Poisonwood Bible", author:"Barbara Kingsolver", category:"Contemporary", cover:PLACEHOLDER, pdf:""},

  {id:'weir', title:"Artemis", author:"Andy Weir", category:"Sci-Fi", cover:PLACEHOLDER, pdf:""},
  {id:'weir2', title:"Project Hail Mary", author:"Andy Weir", category:"Sci-Fi", cover:PLACEHOLDER, pdf:""},
  {id:'clarke', title:"2001: A Space Odyssey", author:"Arthur C. Clarke", category:"Sci-Fi", cover:PLACEHOLDER, pdf:""},
  {id:'asimov2', title:"I, Robot", author:"Isaac Asimov", category:"Sci-Fi", cover:PLACEHOLDER, pdf:""},
  {id:'card2', title:"Speaker for the Dead", author:"Orson Scott Card", category:"Sci-Fi", cover:PLACEHOLDER, pdf:""}
];

function loadUsers(){ try{ return JSON.parse(localStorage.getItem(USERS_KEY)||'[]') }catch(e){ return []; } }
function saveUsers(users){ localStorage.setItem(USERS_KEY, JSON.stringify(users)); }
function getCurrent(){ try{ return JSON.parse(localStorage.getItem(CURR_KEY)||'null') }catch(e){ return null; } }
function setCurrent(u){ localStorage.setItem(CURR_KEY, JSON.stringify(u)); }


if(!loadUsers().some(u => u.username === 'demo')) {
  const users = loadUsers();
  users.push({username:'demo', email:'demo@example.com', password:'demo123', books:[]});
  saveUsers(users);
}


function applyTheme(){ const t = localStorage.getItem(THEME_KEY) || 'light'; if(t === 'dark') document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark'); }
function toggleTheme(){ const t = localStorage.getItem(THEME_KEY) || 'light'; localStorage.setItem(THEME_KEY, t === 'light' ? 'dark' : 'light'); applyTheme(); }


const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));


function appInit(page) {
  applyTheme();


  const splash = document.querySelector('.splash');
  if(splash) setTimeout(()=>splash.style.display='none',700);


  ['#themeBtn', '#themeBtn2', '#themeBtn3'].forEach(id => { const el = $(id); if(el) el.onclick = toggleTheme; });

  ['#logoutTop', '#logoutTop2', '#logoutTop3'].forEach(id => { const el = $(id); if(el) el.onclick = e => { e.preventDefault(); logout(); }});


  if(page === 'home') {
    renderChips();
    renderGrid(BOOKS);
    const s = $('#searchInput'); if(s) s.addEventListener('input', e => searchBooks(e.target.value));
    const vs = $('#viewToggle'); if(vs) vs.onclick = toggleView;
    const sortSelect = $('#sortSelect'); if(sortSelect) sortSelect.onchange = () => sortBooks(sortSelect.value);
  }
  if(page === 'library') {
    renderLibrary();
    const clearBtn = $('#clearLibBtn'); if(clearBtn) clearBtn.onclick = clearLibrary;
    const libSort = $('#libSort'); if(libSort) libSort.onchange = () => sortLibrary(libSort.value);
  }
  if(page === 'profile') {
    loadProfile();
    const editBtn = $('#editProfileBtn'); if(editBtn) editBtn.onclick = () => $('#editProfileForm').classList.toggle('hidden');
    const saveBtn = $('#saveProfileBtn'); if(saveBtn) saveBtn.onclick = saveProfile;
    const logoutP = $('#logoutBtnProfile'); if(logoutP) logoutP.onclick = logout;
  }

  authInit();
}


let viewMode = 'grid';
function toggleView(){ viewMode = viewMode === 'grid' ? 'list' : 'grid'; renderGrid(BOOKS); }
function renderChips(){
  const root = $('#chips'); if(!root) return;
  root.innerHTML = '';
  const cats = Array.from(new Set(BOOKS.map(b => b.category)));
  const all = document.createElement('div'); all.className='chip'; all.innerText='All'; all.onclick = () => renderGrid(BOOKS); root.appendChild(all);
  cats.forEach(c => { const d = document.createElement('div'); d.className='chip'; d.innerText = c; d.onclick = () => renderGrid(BOOKS.filter(b=>b.category===c)); root.appendChild(d); });
}
function renderGrid(list) {
  const root = $('#booksGrid'); if(!root) return;
  root.innerHTML = '';
  root.style.gridTemplateColumns = viewMode === 'grid' ? 'repeat(auto-fill,minmax(180px,1fr))' : 'repeat(1,1fr)';
  list.forEach(b => {
    const div = document.createElement('div'); div.className = 'card';
    div.innerHTML = `<img src="${b.cover || PLACEHOLDER}" alt="${escapeHtml(b.title)}" onerror="this.onerror=null;this.src='${PLACEHOLDER}'"><h4>${escapeHtml(b.title)}</h4><p class="muted">${escapeHtml(b.author)}</p><div class="row" style="margin-top:8px"><button class="btn primary" data-read="${b.id}">Read</button><button class="btn ghost" data-add="${b.id}">Add</button></div>`;
    root.appendChild(div);
  });

  $$('[data-read]').forEach(btn => btn.onclick = e => openBook(e.currentTarget.dataset.read));
  $$('[data-add]').forEach(btn => btn.onclick = e => addToLibrary(e.currentTarget.dataset.add));
}


function searchBooks(q) {
  if(!q) return renderGrid(BOOKS);
  q = q.toLowerCase().trim();
  const res = BOOKS.filter(b => (b.title + ' ' + b.author + ' ' + b.category).toLowerCase().includes(q));
  renderGrid(res);
}
function sortBooks(mode) {
  if(!mode) return renderGrid(BOOKS);
  const arr = [...BOOKS].sort((a,b) => a[mode].localeCompare(b[mode]));
  renderGrid(arr);
}


function openBook(id) {
  const b = BOOKS.find(x => x.id === id);
  if(!b) return alert('Book not found');
  $('#modal').style.display = 'flex';
  $('#modalTitle').innerText = `${b.title} — ${b.author}`;
  const body = $('#modalBody');
  if(b.pdf && b.pdf.endsWith('.pdf')) {
    body.innerHTML = `<iframe src="${b.pdf}"></iframe>`;
  } else {
    body.innerHTML = `<p class="muted">Full PDF not hosted here. <a href="${b.pdf || '#'}" target="_blank">Open preview</a></p>`;
  }
  $('#closeModalBtn') && ($('#closeModalBtn').onclick = closeModal);
}
function closeModal() { $('#modal').style.display = 'none'; $('#modalBody').innerHTML = ''; }


function authInit() {

  $('#loginBtn') && ($('#loginBtn').onclick = login);
  $('#guestBtn') && ($('#guestBtn').onclick = guestLogin);

  $('#signupBtn') && ($('#signupBtn').onclick = signup);
}
function signup() {
  const u = $('#signupUser').value.trim(), e = $('#signupEmail').value.trim(), p = $('#signupPass').value;
  if(!u || !p) { $('#signupErr') && ($('#signupErr').innerText = 'Username & password required'); return; }
  const users = loadUsers();
  if(users.find(x => x.username === u || (e && x.email === e))) { $('#signupErr') && ($('#signupErr').innerText = 'Username or email exists'); return; }
  users.push({username: u, email: e, password: p, books: []});
  saveUsers(users); setCurrent({username: u, email: e, isGuest: false}); location.href = 'index.html';
}
function login() {
  const u = $('#loginUser').value.trim(), p = $('#loginPass').value;
  const users = loadUsers(); const user = users.find(x => x.username === u && x.password === p);
  if(!user) { $('#authError') && ($('#authError').innerText = 'Invalid credentials'); return; }
  setCurrent({username: user.username, email: user.email, isGuest: false});
  location.href = 'index.html';
}
function guestLogin() {
  if(!confirm('Guest Mode — actions will NOT be saved. Continue?')) return;
  setCurrent({username:'Guest', email:'', isGuest:true});
  location.href = 'index.html';
}


function addToLibrary(id) {
  const cur = getCurrent(); if(!cur) return location.href = 'login.html';
  if(cur.isGuest) return alert('Guests cannot save books. Please sign up or login.');
  const users = loadUsers(); const u = users.find(x => x.username === cur.username); if(!u) return alert('User not found');
  u.books = u.books || []; if(u.books.includes(id)) return alert('Already in your library');
  u.books.push(id); saveUsers(users); alert('Added to your library');
}
function getSavedBooks() {
  const cur = getCurrent(); if(!cur || cur.isGuest) return [];
  const users = loadUsers(); const u = users.find(x => x.username === cur.username); return u?.books || [];
}
function renderLibrary() {
  const ids = getSavedBooks(); const root = $('#libGrid'); if(!root) return;
  root.innerHTML = ''; if(!ids.length) { $('#libNote') && ($('#libNote').innerText = 'No saved books yet.'); return; }
  $('#libNote') && ($('#libNote').innerText = '');
  ids.forEach(id => {
    const b = BOOKS.find(x => x.id === id); if(!b) return;
    const card = document.createElement('div'); card.className = 'card';
    card.innerHTML = `<img src="${b.cover || PLACEHOLDER}" onerror="this.onerror=null;this.src='${PLACEHOLDER}'"><h4>${escapeHtml(b.title)}</h4><p class="muted">${escapeHtml(b.author)}</p><div class="row" style="margin-top:8px"><button class="btn primary" data-read="${b.id}">Read</button><button class="btn ghost" data-remove="${b.id}">Remove</button></div>`;
    root.appendChild(card);
  });
  $$('[data-read]').forEach(btn => btn.onclick = e => openBook(e.currentTarget.dataset.read));
  $$('[data-remove]').forEach(btn => btn.onclick = e => removeFromLibrary(e.currentTarget.dataset.remove));
}
function removeFromLibrary(id) {
  const cur = getCurrent(); if(!cur || cur.isGuest) return alert('Guest mode: library not saved'); const users = loadUsers(); const u = users.find(x => x.username === cur.username); u.books = (u.books || []).filter(x => x !== id); saveUsers(users); renderLibrary();
}
function clearLibrary() { if(!confirm('Clear your saved library?')) return; const cur = getCurrent(); if(!cur || cur.isGuest) return alert('Guest mode'); const users = loadUsers(); const u = users.find(x => x.username === cur.username); u.books = []; saveUsers(users); renderLibrary(); }


function loadProfile() {
  const cur = getCurrent(); if(!cur) { location.href = 'login.html'; return; }
  $('#profileUser').innerText = cur.username; $('#profileEmail').innerText = cur.email || '-'; $('#profileAvatar').innerText = (cur.username || 'G')[0].toUpperCase();
  $('#profileCount').innerText = getSavedBooks().length;
}
function saveProfile() {
  const cur = getCurrent(); if(!cur || cur.isGuest) return alert('Guest cannot edit');
  const users = loadUsers(); const u = users.find(x => x.username === cur.username);
  const nn = $('#editName').value.trim(), ne = $('#editEmail').value.trim();
  if(nn) u.username = nn; if(ne) u.email = ne; saveUsers(users); setCurrent({username: u.username, email: u.email, isGuest: false}); loadProfile(); alert('Saved');
}


function loadUsers() { try { return JSON.parse(localStorage.getItem(USERS_KEY) || '[]') } catch(e) { return [] } }
function saveUsers(u) { localStorage.setItem(USERS_KEY, JSON.stringify(u)); }
function setCurrent(u) { localStorage.setItem(CURR_KEY, JSON.stringify(u)); }
function getCurrent() { try { return JSON.parse(localStorage.getItem(CURR_KEY) || 'null') } catch(e) { return null } }


function logout() { localStorage.removeItem(CURR_KEY); location.href = 'login.html'; }
function escapeHtml(s) { if(!s) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }


(function initTheme(){
  if(!localStorage.getItem(THEME_KEY)) localStorage.setItem(THEME_KEY, 'dark');
  applyTheme();
})();

