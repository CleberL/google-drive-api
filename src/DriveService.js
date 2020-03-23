import Drive from './DriveConfig/config';

class DriveService {
  constructor() {
    this.drive = null;
  }

  async start() {
    this.drive = await new Drive().getInstance();
  }

  list() {
    // drive = await driveInstance;
    this.drive?.files?.list(
      {
        pageSize: 10,
        fields: 'nextPageToken, files(id, name)',
      },
      (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const files = res.data.files;
        if (files.length) {
          console.log('Files:');
          files.map(file => {
            console.log(`${file.name} (${file.id})`);
          });
        } else {
          console.log('No files found.');
        }
      }
    );
  }
}

export default DriveService;
