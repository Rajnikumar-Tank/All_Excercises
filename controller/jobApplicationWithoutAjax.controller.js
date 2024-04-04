
const insert = require('./insert.js');
const update = require('./update.js');
const deletes = require('./delete.js')
const getForUpdate = require('./getForUpdate.js');

const conn = require('../connection.js')

// router.get('/',(req,res)=>{
const jobApplicationWithoutAjaxHome = (req, res) => {
	res.render('jobApplicationWithoutAjax/index');
}

// router.get('/insert', (req, res) => {
const jobApplicationWithoutAjaxInsert = (req, res) => {
	sql = "select s.selectName, s.selectType, s.multivalue,o.optionKey, o.optionValue from selectMaster s,optionMaster o where s.selectId=o.selectId;";
	conn.query(sql, (err, result) => {
		if (err) {
			console.error('Error:' + err);
		}
		// console.log(result);
		res.render('jobApplicationWithoutAjax/index', { result });
	})
}
function getField(sql) {
	return new Promise((resolve, reject) => {
		conn.query(sql, (err, result, field) => {
			if (err) {
				console.log(err)
				reject(err);
			}
			else {
				// console.log(result);
				// console.log(field);
				resolve(field);
			}
		})
	})
}
// router.post('/insert', async (req, res) => {
const jobApplicationWithoutAjaxInsertPost = async (req, res) => {
	if (req.body.hidden != undefined) {
		var data = req.body;
		console.log(data);
		var basicDetails = [];
		if (data.fname) {
			basicDetails.push(data.fname);
		}
		if (data.lname) {
			basicDetails.push(data.lname)
		}
		if (data.gender) {
			basicDetails.push(data.gender)
		}
		if (data.Designation1) {
			basicDetails.push(data.Designation1)
		}
		if (data.Address1) {
			basicDetails.push(data.Address1)
		}
		if (data.Address2) {
			basicDetails.push(data.Address2)
		}
		if (data.City) {
			basicDetails.push(data.City)
		}
		if (data.email) {
			basicDetails.push(data.email)
		}
		if (data.Phone) {
			basicDetails.push(data.Phone)
		}
		if (data.State) {
			basicDetails.push(data.State)
		}
		if (data.zcode) {
			basicDetails.push(data.zcode)
		}
		if (data.relation) {
			basicDetails.push(data.relation)
		}
		if (data.dob) {
			const dateMake = data.dob.split('/').reverse().join('-');
			// console.log(dateMake);
			basicDetails.push(dateMake);
		}
		let sql = "select * from basicDetails;"
		let field = await getField(sql);
		field = field.map(e => e.name);
		field = field.slice(1)
		console.log(field);
		sql = "update basicDetails set "
		for (f in field) {
			sql += field[f] + "='" + basicDetails[f] + "',"
		}
		sql = sql.substring(0, sql.length - 1)
		sql += " where AplicantId= " + data.hidden + ";";
		console.log(sql);
		let update_output = await update(sql);
		console.log(update_output);
		let education1 = []
		let education2 = []
		let education3 = []
		let education4 = []
		if (data.gBoard) {
			education1.push(data.hidden);
			if (data.gBoard) {
				education1.push(data.gBoard);
			}
			education1.push('SSC');
			if (data.PassingY1) {
				education1.push(data.PassingY1);
			}
			if (data.Percentage1) {
				education1.push(data.Percentage1);
			}
		}
		if (data.Board2) {
			education2.push(data.hidden)
			if (data.Board2) {
				education2.push(data.Board2);
			}
			education2.push('HSC');
			if (data.PassingY2) {
				education2.push(data.PassingY2);
			}
			if (data.Percentage2) {
				education2.push(data.Percentage2);
			}
		}
		if (data.Course1) {
			education3.push(data.hidden);
			if (data.University1) {
				education3.push(data.University1);
			}
			if (data.Course1) {
				education3.push(data.Course1);
			}
			if (data.PassingY3) {
				education3.push(data.PassingY3);
			}
			if (data.Percentage3) {
				education3.push(data.Percentage3);
			}
		}
		if (data.Course2) {
			education4.push(data.hidden)
			if (data.University2) {
				education4.push(data.University2);
			}
			if (data.Course2) {
				education4.push(data.Course2);
			}
			if (data.PassingY4) {
				education4.push(data.PassingY4);
			}
			if (data.Percentage4) {
				education4.push(data.Percentage4);
			}
		}
		let education = [education1, education2, education3, education4].filter(e => e.length);
		sql = "delete  from educationMaster where AplicantId= " + data.hidden + ";";
		delete_output = await deletes(sql);
		if (education.length) {
			console.log(deletes);
			let sql1 = "INSERT INTO `jobAppDB29`.`educationMaster` (`AplicantId`,`BoardOrUni`, `course`, `passingYear`, `percentage`) VALUES ";
			for (i in education) {
				sql1 += "(?),";
			}
			sql1 = sql1.substring(0, sql1.length - 1);
			var output = await insert(sql1, education);
		}
		var workExperience1 = []
		var workExperience = []
		for (let i = 0; i < data.Company.length; i++) {
			workExperience1.push(data.hidden);
			if (data.Company[i]) {
				workExperience1.push(data.Company[i]);
			}
			if (data.Designation[i]) {

				workExperience1.push(data.Designation[i]);
			}
			if (data.From[i]) {
				workExperience1.push(data.From[i].split('/').reverse().join('-'));
			}
			if (data.To[i]) {
				workExperience1.push(data.To[i].split('/').reverse().join('-'));
			}
			workExperience.push(workExperience1);
			workExperience1 = [];
		}
		workExperience = workExperience.filter(w => w.length)
		sql = "delete from workExperience where AplicantId=" + data.hidden;
		delete_output = await deletes(sql);
		if (workExperience.length) {
			console.log('experience:')
			console.log(workExperience)
			let sql3_1 = "insert into workExperience (`AplicantId`, `companyName`, `Designation`, `fromDate`, `toDate`) values ";
			let sql3_2 = "";
			for (i of workExperience) {
				sql3_2 += "(?),"
			}
			sql3_2 = sql3_2.substring(0, sql3_2.length - 1);
			let sql3 = sql3_1 + sql3_2;
			console.log(sql3)
			output = await insert(sql3, workExperience);
		}

		var language1 = [];
		var language2 = [];
		var language3 = [];
		data.language.forEach(ele => {
			if (ele == 'hindi') {
				language1.push(data.hidden);
				language1.push('Hindi')
				if (data.hindi) {
					if (data.hindi.indexOf('readHindi') != -1) {
						language1.push(1);
					}
					else {
						language1.push(0);
					}
					if (data.hindi.indexOf('writeHindi') != -1) {
						language1.push(1);
					}
					else {
						language1.push(0);
					}
					if (data.hindi.indexOf('SpeakHindi') != -1) {
						language1.push(1);
					}
					else {
						language1.push(0);
					}
				}
			}
			if (ele == 'gujarati') {
				language2.push(data.hidden);
				language2.push('Gujarati')
				if (data.gujarati) {
					if (data.gujarati.indexOf('readGujarati') != -1) {
						language2.push(1);
					}
					else {
						language2.push(0);
					}
					if (data.gujarati.indexOf('writeGujarati') != -1) {
						language2.push(1);
					}
					else {
						language2.push(0);
					}
					if (data.gujarati.indexOf('SpeakGujarati') != -1) {
						language2.push(1);
					}
					else {
						language2.push(0);
					}
				}
			}
			if (ele == 'english') {
				language3.push(data.hidden);
				language3.push('english')
				if (data.english) {
					if (data.english.indexOf('readEnglish') != -1) {
						language3.push(1);
					}
					else {
						language3.push(0);
					}
					if (data.english.indexOf('writeEnglish') != -1) {
						language3.push(1);
					}
					else {
						language3.push(0);
					}
					if (data.english.indexOf('SpeakEnglish') != -1) {
						language3.push(1);
					}
					else {
						language3.push(0);
					}
				}
			}
		})
		let language = [language1, language2, language3].filter(l => l.length);
		sql = 'delete from languages where AplicantId=' + data.hidden;
		delete_output = await deletes(sql);
		if (language.length) {
			console.log(language);
			let sql4_1 = "insert into languages(`AplicantId`, `language`, `isRead`, `isWrite`, `isSpeak`) values"
			let sql4_2 = "";
			for (i of language) {
				sql4_2 += "(?),"
			}
			sql4_2 = sql4_2.substring(0, sql4_2.length - 1);
			let sql4 = sql4_1 + sql4_2;
			output = await insert(sql4, language);
		}
		var technologies1 = [];
		var technologies2 = [];
		var technologies3 = [];
		var technologies4 = [];
		data.technologies.forEach(ele => {
			if (ele == 'php') {
				technologies1.push(data.hidden);
				technologies1.push('php')
				if (data.php) {
					if (data.php.indexOf('BeginerPHP') != -1) {
						technologies1.push(1);
					}
					else {
						technologies1.push(0);
					}
					if (data.php.indexOf('MideaterPHP') != -1) {
						technologies1.push(1);
					}
					else {
						technologies1.push(0);
					}
					if (data.php.indexOf('ExpertPHP') != -1) {
						technologies1.push(1);
					}
					else {
						technologies1.push(0);
					}
				}
			}
			if (ele == 'mysql') {
				technologies2.push(data.hidden);
				technologies2.push('MYsql')
				if (data.mysql) {
					if (data.mysql.indexOf('BeginerMysql') != -1) {
						technologies2.push(1);
					}
					else {
						technologies2.push(0);
					}
					if (data.mysql.indexOf('MideaterMysql') != -1) {
						technologies2.push(1);
					}
					else {
						technologies2.push(0);
					}
					if (data.mysql.indexOf('ExpertMysql') != -1) {
						technologies2.push(1);
					}
					else {
						technologies2.push(0);
					}
				}
			}
			if (ele == 'laravel') {
				technologies3.push(data.hidden);
				technologies3.push('Laravel')
				if (data.laravel) {
					if (data.laravel.indexOf('BeginerLaravel') != -1) {
						technologies3.push(1);
					}
					else {
						technologies3.push(0);
					}
					if (data.laravel.indexOf('MideaterLaravel') != -1) {
						technologies3.push(1);
					}
					else {
						technologies3.push(0);
					}
					if (data.laravel.indexOf('ExpertLaravel') != -1) {
						technologies3.push(1);
					}
					else {
						technologies3.push(0);
					}
				}
			}
			if (ele == 'Oracle') {
				technologies4.push(data.hidden);
				technologies4.push('Oracle')
				if (data.Oracle) {
					if (data.Oracle.indexOf('BeginerOracle') != -1) {
						technologies4.push(1);
					}
					else {
						technologies4.push(0);
					}
					if (data.Oracle.indexOf('MideaterOracle') != -1) {
						technologies4.push(1);
					}
					else {
						technologies4.push(0);
					}
					if (data.Oracle.indexOf('ExpertOracle') != -1) {
						technologies4.push(1);
					}
					else {
						technologies4.push(0);
					}
				}
			}
		})
		let technologies = [technologies1, technologies2, technologies3, technologies4].filter(t => t.length);
		sql = "Delete from technologies where AplicantId=" + data.hidden;
		delete_output = await deletes(sql)
		if (technologies.length) {
			let sql5_1 = "INSERT INTO `jobAppDB29`.`technologies` (`AplicantId`, `technology`, `isBeginner`, `isMidiater`, `isExpert`) VALUES ";
			let sql5_2 = "";
			for (i in technologies) {
				sql5_2 += "(?),"
			}
			sql5_2 = sql5_2.substring(0, sql5_2.length - 1);
			let sql5 = sql5_1 + sql5_2;
			console.log(sql5);
			output = await insert(sql5, technologies);
		}
		var reference1 = [];
		var reference = [];
		for (let i = 0; i < data.name.length; i++) {
			if (data.name[i]) {
				reference1.push(data.hidden);
				reference1.push(data.name[i])
			}
			if (data.refrePhone[i]) {
				reference1.push(data.refrePhone[i])
			}
			if (data.Relation[i]) {
				reference1.push(data.Relation[i])
			}
			reference.push(reference1);
			reference1 = [];
		}
		reference = reference.filter(r => r.length);
		sql = 'delete from reference where AplicantId=' + data.hidden;
		delete_output = await deletes(sql);
		if (reference.length) {
			let sql6_1 = "INSERT INTO `jobAppDB29`.`reference` (`AplicantId`, `name`, `contactNumber`, `relation`) VALUES"
			let sql6_2 = "";
			for (i in reference) {
				sql6_2 += "(?),";
			}
			sql6_2 = sql6_2.substring(0, sql6_2.length - 1);
			let sql6 = sql6_1 + sql6_2;
			console.log(sql6);
			output = await insert(sql6, reference);
		}
		let pereference = []
		if (data.preference_location) {
			pereference.push((data.preference_location).toString())
		}
		if (data.notice) {
			pereference.push(data.notice)
		}
		if (data.ECTC) {
			pereference.push(data.ECTC)
		}
		if (data.CCTC) {
			pereference.push(data.CCTC)
		}
		if (data.department) {
			pereference.push(data.department)
		}
		sql = "select * from preferances";
		field = await getField(sql);
		field = field.map(e => e.name)
		field = field.slice(2);
		sql = `update preferances set `;
		console.log(field);
		for (i in field) {
			sql += field[i] + "='" + pereference[i] + "',";
		}
		sql = sql.substring(0, sql.length - 1)
		sql += " where AplicantId=" + data.hidden;

		console.log(sql)
		update_output = await update(sql);
		console.log(output);
		res.redirect('/jobApplicationWithoutAjax/');
	} else {
		var data = req.body
		var lastInsertId;
		console.log(data)
		var basicDetails = [];
		if (data.fname) {
			basicDetails.push(data.fname);
		}
		if (data.lname) {
			basicDetails.push(data.lname)
		}
		if (data.gender) {
			basicDetails.push(data.gender)
		}
		if (data.Designation1) {
			basicDetails.push(data.Designation1)
		}
		if (data.Address1) {
			basicDetails.push(data.Address1)
		}
		if (data.Address2) {
			basicDetails.push(data.Address2)
		}
		if (data.City) {
			basicDetails.push(data.City)
		}
		if (data.email) {
			basicDetails.push(data.email)
		}
		if (data.Phone) {
			basicDetails.push(data.Phone)
		}
		if (data.State) {
			basicDetails.push(data.State)
		}
		if (data.zcode) {
			basicDetails.push(data.zcode)
		}
		if (data.relation) {
			basicDetails.push(data.relation)
		}
		if (data.dob) {
			const dateMake = data.dob.split('/').reverse().join('-');
			// console.log(dateMake);
			basicDetails.push(dateMake);
		}
		let sql = 'insert into basicDetails( `firstName`, `lastName`, `gender`, `Designation`, `address1`, `address2`, `city`, `emailId`, `phone`, `state`, `zipCode`, `relationshipStatus`, `dateOfBirth`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
		lastInsertId = await insert(sql, basicDetails);

		console.log("last:" + lastInsertId);
		let education1 = []
		let education2 = []
		let education3 = []
		let education4 = []
		education1.push(lastInsertId);

		if (data.gBoard) {
			education1.push(data.gBoard);
		}
		education1.push('SSC');
		if (data.PassingY1) {
			education1.push(data.PassingY1);
		}
		if (data.Percentage1) {
			education1.push(data.Percentage1);
		}
		education2.push(lastInsertId);

		if (data.Board2) {
			education2.push(data.Board2);
		}
		education2.push('HSC');
		if (data.PassingY2) {
			education2.push(data.PassingY2);
		}
		if (data.Percentage2) {
			education2.push(data.Percentage2);
		}
		education3.push(lastInsertId);
		if (data.University1) {
			education3.push(data.University1);
		}
		if (data.Course1) {
			education3.push(data.Course1);
		}
		if (data.PassingY3) {
			education3.push(data.PassingY3);
		}
		if (data.Percentage3) {
			education3.push(data.Percentage3);
		}
		education4.push(lastInsertId);
		if (data.University2) {
			education4.push(data.University2);
		}
		if (data.Course2) {
			education4.push(data.Course2);
		}
		if (data.PassingY4) {
			education4.push(data.PassingY4);
		}
		if (data.Percentage4) {
			education4.push(data.Percentage4);
		}
		let sql1 = "INSERT INTO `jobAppDB29`.`educationMaster` (`AplicantId`,`BoardOrUni`, `course`, `passingYear`, `percentage`) VALUES (?);";
		let education = [education1, education2, education3, education4].filter(e => e.length);
		var output = await insert(sql1, education)
		var workExperience1 = []
		var workExperience = []
		for (let i = 0; i < data.Company.length; i++) {
			workExperience1.push(lastInsertId);
			if (data.Company[i]) {
				workExperience1.push(data.Company[i]);
			}
			if (data.Designation[i]) {

				workExperience1.push(data.Designation[i]);
			}
			if (data.From[i]) {
				workExperience1.push(data.From[i].split('/').reverse().join('-'));
			}
			if (data.To[i]) {
				workExperience1.push(data.To[i].split('/').reverse().join('-'));
			}
			workExperience.push(workExperience1);
			workExperience1 = [];
		}
		console.log('experience:')
		workExperience = workExperience.filter(w => w.length)
		console.log(workExperience)
		let sql3_1 = "insert into workExperience (`AplicantId`, `companyName`, `Designation`, `fromDate`, `toDate`) values ";
		let sql3_2 = "";
		for (i of workExperience) {
			sql3_2 += "(?),"
		}
		sql3_2 = sql3_2.substring(0, sql3_2.length - 1);
		let sql3 = sql3_1 + sql3_2;
		console.log(sql3)
		output = await insert(sql3, workExperience);

		var language1 = [];
		var language2 = [];
		var language3 = [];
		data.language.forEach(ele => {
			if (ele == 'hindi') {
				language1.push(lastInsertId);
				language1.push('Hindi')
				if (data.hindi) {
					if (data.hindi.indexOf('readHindi') != -1) {
						language1.push(1);
					}
					else {
						language1.push(0);
					}
					if (data.hindi.indexOf('writeHindi') != -1) {
						language1.push(1);
					}
					else {
						language1.push(0);
					}
					if (data.hindi.indexOf('SpeakHindi') != -1) {
						language1.push(1);
					}
					else {
						language1.push(0);
					}
				}
			}
			if (ele == 'gujarati') {
				language2.push(lastInsertId);
				language2.push('Gujarati')
				if (data.gujarati) {
					if (data.gujarati.indexOf('readGujarati') != -1) {
						language2.push(1);
					}
					else {
						language2.push(0);
					}
					if (data.gujarati.indexOf('writeGujarati') != -1) {
						language2.push(1);
					}
					else {
						language2.push(0);
					}
					if (data.gujarati.indexOf('SpeakGujarati') != -1) {
						language2.push(1);
					}
					else {
						language2.push(0);
					}
				}
			}
			if (ele == 'english') {
				language3.push(lastInsertId);
				language3.push('english')
				if (data.english) {
					if (data.english.indexOf('readEnglish') != -1) {
						language3.push(1);
					}
					else {
						language3.push(0);
					}
					if (data.english.indexOf('writeEnglish') != -1) {
						language3.push(1);
					}
					else {
						language3.push(0);
					}
					if (data.english.indexOf('SpeakEnglish') != -1) {
						language3.push(1);
					}
					else {
						language3.push(0);
					}
				}
			}
		})
		let language = [language1, language2, language3].filter(l => l.length);
		console.log(language);
		let sql4_1 = "insert into languages(`AplicantId`, `language`, `isRead`, `isWrite`, `isSpeak`) values"
		let sql4_2 = "";
		for (i of language) {
			sql4_2 += "(?),"
		}
		sql4_2 = sql4_2.substring(0, sql4_2.length - 1);
		let sql4 = sql4_1 + sql4_2;
		output = await insert(sql4, language);

		var technologies1 = [];
		var technologies2 = [];
		var technologies3 = [];
		var technologies4 = [];
		data.technologies.forEach(ele => {
			if (ele == 'php') {
				technologies1.push(lastInsertId);
				technologies1.push('php')
				if (data.php) {
					if (data.php.indexOf('BeginerPHP') != -1) {
						technologies1.push(1);
					}
					else {
						technologies1.push(0);
					}
					if (data.php.indexOf('MideaterPHP') != -1) {
						technologies1.push(1);
					}
					else {
						technologies1.push(0);
					}
					if (data.php.indexOf('ExpertPHP') != -1) {
						technologies1.push(1);
					}
					else {
						technologies1.push(0);
					}
				}
			}
			if (ele == 'mysql') {
				technologies2.push(lastInsertId);
				technologies2.push('MYsql')
				if (data.mysql) {
					if (data.mysql.indexOf('BeginerMysql') != -1) {
						technologies2.push(1);
					}
					else {
						technologies2.push(0);
					}
					if (data.mysql.indexOf('MideaterMysql') != -1) {
						technologies2.push(1);
					}
					else {
						technologies2.push(0);
					}
					if (data.mysql.indexOf('ExpertMysql') != -1) {
						technologies2.push(1);
					}
					else {
						technologies2.push(0);
					}
				}
			}
			if (ele == 'laravel') {
				technologies3.push(lastInsertId);
				technologies3.push('Laravel')
				if (data.laravel) {
					if (data.laravel.indexOf('BeginerLaravel') != -1) {
						technologies3.push(1);
					}
					else {
						technologies3.push(0);
					}
					if (data.laravel.indexOf('MideaterLaravel') != -1) {
						technologies3.push(1);
					}
					else {
						technologies3.push(0);
					}
					if (data.laravel.indexOf('ExpertLaravel') != -1) {
						technologies3.push(1);
					}
					else {
						technologies3.push(0);
					}
				}
			}
			if (ele == 'Oracle') {
				technologies4.push(lastInsertId);
				technologies4.push('Oracle')
				if (data.Oracle) {
					if (data.Oracle.indexOf('BeginerOracle') != -1) {
						technologies4.push(1);
					}
					else {
						technologies4.push(0);
					}
					if (data.Oracle.indexOf('MideaterOracle') != -1) {
						technologies4.push(1);
					}
					else {
						technologies4.push(0);
					}
					if (data.Oracle.indexOf('ExpertOracle') != -1) {
						technologies4.push(1);
					}
					else {
						technologies4.push(0);
					}
				}
			}
		})
		let technologies = [technologies1, technologies2, technologies3, technologies4].filter(t => t.length);
		let sql5_1 = "INSERT INTO `jobAppDB29`.`technologies` (`AplicantId`, `technology`, `isBeginner`, `isMidiater`, `isExpert`) VALUES ";
		let sql5_2 = "";
		for (i in technologies) {
			sql5_2 += "(?),"
		}
		sql5_2 = sql5_2.substring(0, sql5_2.length - 1);
		let sql5 = sql5_1 + sql5_2;
		console.log(sql5);
		output = await insert(sql5, technologies);

		var reference1 = [];
		var reference = [];
		for (let i = 0; i < data.name.length; i++) {
			if (data.name[i]) {
				reference1.push(lastInsertId);
				reference1.push(data.name[i])
			}
			if (data.refrePhone[i]) {
				reference1.push(data.refrePhone[i])
			}
			if (data.Relation[i]) {
				reference1.push(data.Relation[i])
			}
			reference.push(reference1);
			reference1 = [];
		}
		reference = reference.filter(r => r.length);
		let sql6_1 = "INSERT INTO `jobAppDB29`.`reference` (`AplicantId`, `name`, `contactNumber`, `relation`) VALUES"
		let sql6_2 = "";
		for (i in reference) {
			sql6_2 += "(?),";
		}
		sql6_2 = sql6_2.substring(0, sql6_2.length - 1);
		let sql6 = sql6_1 + sql6_2;
		console.log(sql6);
		output = await insert(sql6, reference);
		let pereference = []
		if (data.preference_location) {
			pereference.push(lastInsertId);
			pereference.push((data.preference_location).toString())
		}
		if (data.notice) {
			pereference.push(data.notice)
		}
		if (data.ECTC) {
			pereference.push(data.ECTC)
		}
		if (data.CCTC) {
			pereference.push(data.CCTC)
		}
		if (data.department) {
			pereference.push(data.department)
		}
		let sql7 = "INSERT INTO `jobAppDB29`.`preferances` (`AplicantId`, `prefere_location`, `noticePeriod`, `expactedCTC`, `currentCTC`, `department`) VALUES (?);"

		let pereferences = []
		pereferences.push(pereference)
		output = await insert(sql7, pereferences)
		if (output > -1) {
			// res.end("Your are application Send!!")
			// res.redirect('back')
			res.redirect('/jobApplicationWithoutAjax/')
		}
		else {
			// res.end('not inserted')
			res.redirect('back');

		}
	}
}
// router.get('/record', (req, res) => {
const jobApplicationWithoutAjaxRecord = (req, res) => {
	res.render('jobApplicationWithoutAjax/components/show_record');
}
// router.get('/display', (req, res) => {
const jobApplicationWithoutAjaxDisplay = (req, res) => {
	sql = 'select AplicantId,firstName,lastName,dateOfBirth,gender,city,emailId,phone,state from basicDetails;'
	conn.query(sql, (err, result) => {
		if (err) {
			//console.error(err);
		}
		else {
			// //console.log(result);
			res.json(result);
		}
	})
}
// router.get('/update', async (req, res) => {
const jobApplicationWithoutAjaxUpdate = async (req, res) => {
	let id = req.query.id;
	let sql = "select s.selectName, s.selectType, s.multivalue,o.optionKey, o.optionValue from selectMaster s,optionMaster o where s.selectId=o.selectId;";
	let sql1 = "Select * from basicDetails b where b.AplicantId=" + id + ";";
	let sql2 = "Select * from educationMaster e where e.AplicantId=" + id + ";";
	let sql3 = "Select * from workExperience w where w.AplicantId=" + id + ";";
	let sql4 = "Select * from languages l where l.AplicantId=" + id + ";";
	let sql5 = "Select * from technologies t where t.AplicantId=" + id + ";";
	let sql6 = "Select * from reference r where r.AplicantId=" + id + ";";
	let sql7 = "Select * from preferances p where p.AplicantId=" + id + ";";
	var result = await getForUpdate(sql)
	var result1 = await getForUpdate(sql1);
	var result2 = await getForUpdate(sql2);
	var result3 = await getForUpdate(sql3);
	var result4 = await getForUpdate(sql4);
	var result5 = await getForUpdate(sql5);
	var result6 = await getForUpdate(sql6);
	var result7 = await getForUpdate(sql7);
	console.log(result5)
	res.render("jobApplicationWithoutAjax/index", { result, result1: result1[0], result2, result3, result4, result5, result6, result7: result7[0], code: "update" })
}

module.exports = { jobApplicationWithoutAjaxDisplay, jobApplicationWithoutAjaxHome, jobApplicationWithoutAjaxInsert, jobApplicationWithoutAjaxInsertPost, jobApplicationWithoutAjaxUpdate, jobApplicationWithoutAjaxRecord }