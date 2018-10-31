class DatabaseConnection {
  private static databaseConnection: DatabaseConnection;
  
  private DatabaseConnection() {
    
  }

  public static getInstance(): DatabaseConnection {
    if (this.databaseConnection === null) {
      this.databaseConnection = new DatabaseConnection();
    }

    return this.databaseConnection;
  }
}